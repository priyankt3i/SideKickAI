
# SideKickAI

**SideKickAI** is a cross-platform React Native application designed to help users store and organize URLs, PDFs, images, and other content. The app leverages device sharing features for easy content addition and integrates a Large Language Model (LLM) to enable users to interact with their stored content using Retrieval-Augmented Generation (RAG).

## Features

- **Content Storage**: Save URLs, PDFs, images, and more using your device's share functionality.
- **Contextual Organization**: Automatically organize and categorize stored content for easy retrieval.
- **LLM Integration**: Interact with your stored content through natural language queries using Retrieval-Augmented Generation.
- **Cross-Platform Support**: Available on both iOS and Android devices.
- **Social Authentication**: Sign in using Google or Apple ID for a seamless experience.

## Project Structure

The project follows a modular structure for scalability and maintainability:

```
SideKickAI/
├── android/            # Native Android project files
├── ios/                # Native iOS project files
├── src/                # Source code for the application
│   ├── assets/         # Static assets like images and fonts
│   ├── components/     # Reusable UI components
│   ├── context/        # Context providers for state management
│   ├── screens/        # Screen components for navigation
│   ├── services/       # API calls and data fetching
│   ├── utils/          # Utility functions and helpers
│   ├── App.js          # Entry point of the application
│   └── routes.js       # Navigation configuration
├── .babelrc            # Babel configuration
├── .eslintrc.js        # ESLint configuration
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation
```

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. [Download Node.js](https://nodejs.org/)
- **React Native CLI**: Install the React Native CLI globally:
  ```bash
  npm install -g react-native-cli
  ```
- **Android Studio** (for Android development): [Download Android Studio](https://developer.android.com/studio)
- **Xcode** (for iOS development): Available on the Mac App Store.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/SideKickAI.git
   cd SideKickAI
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   - Create a `.env` file in the root directory.
   - Add necessary environment variables (e.g., API keys).

### Running the Application

- **iOS**:
  ```bash
  npx react-native run-ios
  ```

- **Android**:
  ```bash
  npx react-native run-android
  ```

## Authentication Configuration

To enable Google and Apple Sign-In:

1. **Google Sign-In**:
   - Set up a project in the [Google Developer Console](https://console.developers.google.com/).
   - Obtain the `webClientId` and add it to your environment variables.

2. **Apple Sign-In**:
   - Configure Sign In with Apple in your [Apple Developer account](https://developer.apple.com/account/).
   - Ensure your app's provisioning profile includes the Sign In with Apple capability.

## LLM Integration

The application integrates with a Large Language Model to provide conversational interactions with stored content. Ensure you have the necessary API keys and access rights to utilize this feature.

## Contributing

We welcome contributions to enhance SideKickAI. Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/YourFeatureName
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/YourFeatureName
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React Native](https://reactnative.dev/)
- [OpenAI](https://www.openai.com/)
- [Google Sign-In for React Native](https://github.com/react-native-google-signin/google-signin)
- [React Native Apple Authentication](https://github.com/invertase/react-native-apple-authentication)
```