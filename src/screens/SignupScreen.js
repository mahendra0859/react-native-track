import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const SignupScreen = ({ navigation }) => {
  const { navigate } = navigation;
  return (
    <View>
      <Text style={styles.textStyle}>SignupScreen</Text>
      <Button title="Go to sign in" onPress={() => navigate("Signin")} />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: { textAlign: "center", fontSize: 40 }
});

export default SignupScreen;
