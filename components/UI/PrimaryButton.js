import React from "react";
import { View, Text, Pressable } from "react-native";

export default function PrimaryButton({
  children,
  style,
  textColor,
  textSize,
  onPress,
}) {
  const buttonStyle = { color: textColor, fontSize: textSize };

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) =>
        pressed ? { ...buttonStyle, opacity: 0.75 } : buttonStyle
      }
    >
      <View style={style}>
        <Text style={buttonStyle}>{children}</Text>
      </View>
    </Pressable>
  );
}
