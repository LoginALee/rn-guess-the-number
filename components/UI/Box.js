import React from "react";
import { Colors } from "../../constants/colors";
import { View, StyleSheet } from "react-native";

export default function Box({ children, style }) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    minWidth: "90%",
    minHeight: "45%",
    backgroundColor: Colors.green500,
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    padding: 8,
  },
});
