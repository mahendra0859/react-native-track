import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TrackDetailsScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>TrackDetailsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: { textAlign: "center", fontSize: 40, marginTop: 40 }
});

export default TrackDetailsScreen;
