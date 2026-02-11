# AI Workout Tracker

A modern, AI-powered workout tracking application built with **React Native**, **Expo**, and **NativeWind**. This app helps you log workouts, track progress with visual statistics, and get personalized exercise guidance using **Google Gemini AI**.

## 🚀 Features

-   **🏋️ Workout Tracking:** log exercises, sets, reps, and weights easily.
-   **🤖 AI Coaching:** Get instant, detailed instructions and tips for any exercise, powered by **Google Gemini**.
-   **📊 Statistics Dashboard:** View your workout history, total volume, and consistency stats.
-   **🔐 Authentication:** Secure user sign-up and login via **Clerk**.
-   **☁️ Cloud Sync:** Your data is stored safely in **Sanity CMS**.

## 🛠️ Tech Stack

-   **Framework:** [React Native](https://reactnative.dev/) with [Expo](https://expo.dev/) (Managed Workflow)
-   **Styling:** [NativeWind](https://www.nativewind.dev/) (Tailwind CSS for React Native)
-   **State Management:** [Zustand](https://github.com/pmndrs/zustand)
-   **Backend / CMS:** [Sanity.io](https://www.sanity.io/)
-   **Authentication:** [Clerk](https://clerk.com/)
-   **AI Integration:** [Google Gemini API](https://ai.google.dev/) via `@google/generative-ai`

## 🏁 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

-   [Node.js](https://nodejs.org/) (LTS recommended)
-   [Expo CLI](https://docs.expo.dev/get-started/installation/)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/fitness-app-ai.git
    cd fitness-app-ai
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up Environment Variables:**

    Create a `.env` file in the root directory and add the following keys:

    ```env
    # Clerk Authentication
    EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

    # Google Gemini AI
    GEMINI_API_KEY=your_google_gemini_api_key

    # Sanity CMS (if not hardcoded in client.ts)
    EXPO_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
    EXPO_PUBLIC_SANITY_DATASET=production
    SANITY_API_TOKEN=your_sanity_write_token
    ```

4.  **Run the app:**

    ```bash
    npx expo start
    ```

    -   Scan the QR code with your phone (using Expo Go).
    -   Press `a` to run on Android Emulator.
    -   Press `i` to run on iOS Simulator.

## 📱 Project Structure

```
src/
├── app/              # Expo Router pages (screens)
│   ├── (app)/        # Protected routes (Tabs, etc.)
│   ├── (auth)/       # Authentication routes
│   └── api/          # API routes (e.g., AI integration)
├── components/       # Reusable UI components
├── lib/              # Utilities and configuration (Sanity, Clerk)
├── store/            # Zustand state stores
└── theme/            # Design tokens and theme config
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
