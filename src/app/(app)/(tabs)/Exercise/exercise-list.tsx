import { router, useLocalSearchParams, useRouter } from "expo-router";
import groq from "groq";
import { client } from "@/lib/sanity/client";
import { useEffect, useState } from "react";
import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ExerciseCard from "@/app/components/ExerciseCard";
import { Ionicons } from "@expo/vector-icons";

import { Exercise } from "@/lib/sanity/types";


const exercisesByGroupQuery = groq`
  *[_type == "muscleGroup" && _id == $id][0]{
    name,
    exercises[]->{
      _id,
      name,
      description,
      difficulty,
      image,
      videoUrl
    }
  }
`;

export const exercisesQuery = groq`*[_type == "exercise"] {
  ...
  }`;

export default function ExerciseList() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const [group, setGroup] = useState<any>(null);

  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [filteredExercises, setFilteredExercises] = useState<Exercise[]>([]);

  const [refreshing, setRefreshing] = useState(false);

  const fetchGroup = async () => {
    try {
      const data = await client.fetch(exercisesByGroupQuery, { id });
      setGroup(data);
    } catch (error) {
      console.error("Error fetching exercises:", error);
    }
  };

  useEffect(() => {
    if (id) fetchGroup();
  }, [id]);

  if (!group) {
    return <Text>Loading...</Text>;
  }

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchExercise();
    setRefreshing(false);
  };

  const fetchExercise = async () => {
    try {
      const exercises = await client.fetch(exercisesQuery);
      setExercises(exercises);
      setFilteredExercises(exercises);
    } catch (error) {
      console.error("Error fetching exercises:", error);
    }
  };

  return (
    <SafeAreaView>
      <View className="px-6 py-4 bg-white border-b border-gray-200">
        <View className="flex-row">
          <TouchableOpacity onPress={() => router.back()} className="mr-3 mt-1">
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <View>
            <Text className="text-2xl font-bold text-gray-900">
              Exercise Library
            </Text>
            {/* <Text className="text-gray-600 mt-1">
              Discover and master new exercises
            </Text> */}
          </View>
        </View>

        {/*Search Bar*/}
        <View className="flex-row items-center bg-gray-100 rounded-3xl px-4 py-3 mt-4 ">
          <Ionicons name="search" size={20} color="#6B7280" />
          <TextInput
            className="flex-1 ml-3 text-gray-800"
            placeholder="Search exercises..."
            placeholderTextColor="#9CA3AF"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery("")}>
              <Ionicons name="close-circle" size={20} color="#6B7280" />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <FlatList
        data={group.exercises}
        keyExtractor={(item) => item._id}
        contentContainerStyle={{
          padding: 24,
          paddingBottom: 140,
        }}
        renderItem={({ item }) => (
          <ExerciseCard
            item={item}
            onPress={() => router.push(`/exercise-detail?id=${item._id}`)}
            showDifficulty={true}
          />
        )}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={["#3B82F6"]}
            tintColor="#3B82F6"
            title="Pull to refresh exercise"
            titleColor="#6B7280"
          />
        }
      />
    </SafeAreaView>
  );
}
