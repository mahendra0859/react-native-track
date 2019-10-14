import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TrackListScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>TrackListScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: { textAlign: "center", fontSize: 40, marginTop: 40 }
});

export default TrackListScreen;
