import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TrackCreateScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>TrackCreateScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: { textAlign: "center", fontSize: 40, marginTop: 40 }
});

export default TrackCreateScreen;
