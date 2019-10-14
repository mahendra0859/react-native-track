import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AccountScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>AccountScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: { textAlign: "center", fontSize: 40, marginTop: 40 }
});

export default AccountScreen;
