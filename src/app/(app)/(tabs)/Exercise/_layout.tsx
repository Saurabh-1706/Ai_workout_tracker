import { Stack } from "expo-router";
import React from "react";

function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }} >
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="exercise-list"
        options={{
          headerShown: false,
          headerTitle: "Exercise",
          headerBackTitle: "Back",
        }}
      />
    </Stack>
  );
}

export default Layout;
