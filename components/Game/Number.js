import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default function Number({ children, color }) {
  return (
    <View style={styles.mainContainer}>
      <Text style={[styles.title, { color, borderColor: color }]}>
        {children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    width: "80%",
    fontWeight: "800",
    fontSize: 26,
    borderWidth: 4,
    padding: 10,
    marginVertical: 14,
    textAlign: "center",
  },
});
