import React from 'react';
import { View, Button, Platform, StyleSheet } from 'react-native';
import { signInWithGoogle, signInWithApple } from '../services/authService';

const LoginScreen = ({ navigation }) => {
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      navigation.replace('Home');
    } catch (error) {
      console.error('Google Sign-In error:', error);
    }
  };

  const handleAppleSignIn = async () => {
    try {
      await signInWithApple();
      navigation.replace('Home');
    } catch (error) {
      console.error('Apple Sign-In error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Sign In with Google" onPress={handleGoogleSignIn} />
      {Platform.OS === 'ios' && (
        <Button title="Sign In with Apple" onPress={handleAppleSignIn} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});

export default LoginScreen;
