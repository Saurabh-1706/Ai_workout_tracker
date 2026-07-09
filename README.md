# 🏋️‍♂️ AI Workout Tracker

A modern, high-performance, and AI-powered workout tracking mobile application built with **React Native**, **Expo (Managed Workflow)**, and **NativeWind (Tailwind CSS)**. This application provides real-time workout logging, stats tracking, and personalized exercise guidance using advanced AI models.

---

## 📱 Screenshots & Visual Flow

<p align="center">
  <img src="assets/dashboard.jpg" alt="AI Workout Tracker Dashboard" width="300" />
</p>

### 🎥 Demo Video

https://github.com/user-attachments/assets/7c303396-8d74-4033-8385-fb601da3cc6d

> [!TIP]
> **Experience Instant AI Coaching!** Tap any exercise in the library and ask the AI Coach for a tailored step-by-step instruction, form tips, and safety guidelines.

---

## ✨ Key Features

*   **🏋️ Live Workout Tracker:**
    *   Interactive session tracking with an integrated stopwatch.
    *   Dynamic set logging (reps, weight, and completion state).
    *   Unit toggling between pounds (`lbs`) and kilograms (`kg`).
    *   State persistence (powered by **Zustand** and **AsyncStorage**) so you never lose progress if the app closes mid-workout.
*   **🤖 AI Coach Integration:**
    *   Custom serverless API routes that interface with **OpenAI (GPT-4o-Mini)** and **Google Gemini AI (1.5 Flash)**.
    *   Instant, structured instructions, safety recommendations, and common variations for any exercise.
    *   Markdown rendering support using **React Native Markdown Display**.
*   **📊 Statistics & Analytics Dashboard:**
    *   Calculate total workouts, total time elapsed, and average workout duration.
    *   Inspect your last completed workout details immediately from the home screen.
*   **📚 Exercise Library:**
    *   Browse exercises organized by target muscle groups.
    *   Search and filter through the entire database in real-time.
*   **🔐 Secure Authentication:**
    *   Full auth flow using **Clerk** supporting secure token caching.
*   **☁️ Cloud Sync (Sanity CMS):**
    *   Robust cloud storage for workouts, exercise data, and muscle groups using **Sanity CMS** schemas.
    *   Automatic typescript generation using **Sanity TypeGen**.

---

## 🛠️ Tech Stack

*   **Core Framework:** [React Native](https://reactnative.dev/) & [Expo SDK 53](https://expo.dev/) (Managed Workflow)
*   **Routing:** [Expo Router](https://docs.expo.dev/router/introduction/) (File-based routing with tab navigation)
*   **Styling:** [NativeWind v4](https://www.nativewind.dev/) (Tailwind CSS for React Native)
*   **State Management:** [Zustand](https://github.com/pmndrs/zustand)
*   **Local Storage:** [AsyncStorage](https://react-native-async-storage.github.io/async-storage/) (Persists active workout state & user preferences)
*   **Backend & Database:** [Sanity CMS](https://www.sanity.io/) (Headless CMS for structured content management)
*   **Authentication:** [Clerk Auth](https://clerk.com/)
*   **AI Models:** [OpenAI API](https://openai.com/) & [Google Gemini API](https://ai.google.dev/)
*   **Icons:** [Expo Vector Icons (Ionicons)](https://icons.expo.fyi/)

---

## 📂 Project Directory Structure

```filepath
AI Workout Tracker/
├── src/
│   ├── app/                    # Expo Router directory
│   │   ├── _layout.tsx         # Root layout with ClerkProvider configuration
│   │   ├── (app)/              # Protected application route group (requires auth)
│   │   │   ├── _layout.tsx     # Route protector check & animation settings
│   │   │   ├── exercise-detail.tsx  # Detailed view with AI guidance generator
│   │   │   ├── exercises.tsx   # Global searchable exercise library
│   │   │   ├── sign-in.tsx     # Sign-in screen using Clerk
│   │   │   ├── sign-up.tsx     # Sign-up screen using Clerk
│   │   │   └── (tabs)/         # Bottom navigation tab group
│   │   │       ├── index.tsx   # Dashboard / Home showing stats and quick actions
│   │   │       ├── active-workout.tsx # Interactive session tracker & set logger
│   │   │       ├── workout.tsx # Start workout portal
│   │   │       ├── _layout.tsx # Bottom tab bar design & styling
│   │   │       ├── Exercise/   # Muscle group catalog & sub-lists
│   │   │       │   ├── index.tsx
│   │   │       │   └── exercise-list.tsx
│   │   │       ├── history/    # Complete workout logs & details
│   │   │       │   ├── index.tsx
│   │   │       │   └── workout-record.tsx
│   │   │       └── profile/    # User settings and personal stats
│   │   │           └── index.tsx
│   │   └── api/                # Next-gen serverless Expo API routes
│   │       ├── ai+api.ts       # AI prompt processing engine (OpenAI / Gemini)
│   │       ├── save-workout+api.ts   # Secure endpoint to persist workouts in Sanity
│   │       └── delete-workout+api.ts # Endpoint to remove workouts from Sanity
│   ├── components/             # Reusable UI Components
│   │   ├── ExerciseCard.tsx    # Renders exercise details, image & difficulty badges
│   │   ├── ExerciseSelectionModal.tsx # Fullscreen modal to select exercises during workout
│   │   └── GoogleSignIn.tsx    # Auth button for OAuth sign-in flow
│   ├── lib/                    # Configuration and Utilities
│   │   └── sanity/
│   │       ├── client.ts       # Configuration for Sanity read/write clients
│   │       └── types.ts        # Auto-generated schemas types
│   └── global.css              # Root Tailwind/CSS declarations
├── store/
│   └── workout-store.ts        # Zustand store managing workout state, sets, and units
├── sanity/                     # Headless Sanity CMS Studio
│   ├── schemaTypes/            # Sanity schema definitions
│   │   ├── exercise.ts         # Exercise document schema
│   │   ├── muscleGroup.ts      # Muscle Group document schema
│   │   └── workout.ts          # Workout session document schema
│   ├── sanity.config.ts        # Sanity configurations
│   └── package.json            # Sanity Studio dependencies
└── tailwind.config.js          # Tailwind CSS settings and NativeWind presets
```

---

## 🏁 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

*   [Node.js](https://nodejs.org/) (v18+ recommended)
*   [Expo Go](https://expo.dev/go) app installed on your physical mobile device (or Android Studio / Xcode simulator configured on your computer).

### Setup Instructions

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/your-username/fitness-app-ai.git
    cd fitness-app-ai
    ```

2.  **Install App Dependencies:**

    ```bash
    npm install
    ```

3.  **Setup Environment Variables:**

    Create a `.env.local` file in the root directory:

    ```env
    # Clerk Authentication Publishable Key
    EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

    # OpenAI API Key (For AI Coach)
    OPENAI_API_KEY=your_openai_api_key

    # Google Gemini API Key (If swapping to Gemini)
    # GEMINI_API_KEY=your_gemini_api_key

    # Sanity Write Access Token
    SANITY_API_TOKEN=your_sanity_write_access_token
    ```

4.  **Sync Sanity Content Schema (Optional):**

    Navigate to the `sanity` directory to set up or modify database configurations:

    ```bash
    cd sanity
    npm install
    # Start local Sanity Studio to view and seed data
    npx sanity dev
    # Re-generate Typescript definitions from schemas
    npx sanity typegen generate
    ```

5.  **Run the Expo Mobile App:**

    Return to the root directory and start the Expo dev server:

    ```bash
    npm run start
    ```

    *   **iOS Simulator:** Press `i`
    *   **Android Emulator:** Press `a`
    *   **Physical Device:** Scan the QR code shown in the terminal using your phone's camera (iOS) or the **Expo Go** application (Android).

---

## 🤝 Contributing

Contributions are welcome! Please fork the repository, make your changes, and submit a Pull Request.

---

## 📄 License

This project is licensed under the MIT License.
