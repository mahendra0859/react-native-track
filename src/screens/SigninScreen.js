import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SigninScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>SigninScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: { textAlign: "center", fontSize: 40, marginTop: 40 }
});

export default SigninScreen;
