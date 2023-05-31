import React from "react";
import { Colors } from "../../constants/colors";
import { View, StyleSheet, useWindowDimensions } from "react-native";

export default function Box({ children, style }) {
  const { width, height } = useWindowDimensions();

  return (
    <View
      style={[
        styles.container,
        {
          minWidth: width < 1000 ? "90%" : "80%",
          minHeight: height < 800 ? "50%" : "30%",
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
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
