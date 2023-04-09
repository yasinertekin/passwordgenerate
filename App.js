import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import styles from "./App.style";

const generatePassword = () => {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
  let password = "";
  for (let i = 0; i < 16; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
};

const checkPasswordStrength = (password) => {
  let score = 0;
  if (!password) return score;

  // award every unique letter until 5 repetitions
  const letters = {};
  for (let i = 0; i < password.length; i++) {
    letters[password[i]] = (letters[password[i]] || 0) + 1;
    score += 5.0 / letters[password[i]];
  }

  // bonus points for mixing it up
  const variations = {
    digits: /\d/.test(password),
    lowercase: /[a-z]/.test(password),
    uppercase: /[A-Z]/.test(password),
    nonWords: /\W/.test(password),
  };
  let variationCount = 0;
  for (let check in variations) {
    variationCount += variations[check] ? 1 : 0;
  }
  score += (variationCount - 1) * 10;

  return score;
};

const getBackgroundColor = (score) => {
  if (score > 80) {
    return "#32CD32";
  } else if (score > 60) {
    return "#FFD700";
  } else if (score === 0) {
    return "#232323";
  } else {
    return "#FF5733";
  }
};

const App = () => {
  const [password, setPassword] = useState("");
  const [score, setScore] = useState(0);

  const handleGeneratePassword = () => {
    const newPassword = generatePassword();
    setPassword(newPassword);
    setScore(checkPasswordStrength(newPassword));
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    setScore(checkPasswordStrength(text));
  };

  const backgroundColor = getBackgroundColor(score);

  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <Text style={styles.header}>Password Generator</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={handlePasswordChange}
        />
      </View>

      <Text style={styles.strengthText}>
        Password Strength: {score.toFixed(2)}
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleGeneratePassword}>
        <Text> Generate Password </Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
