import React from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import { Colors } from "../constants/colors";
import PrimaryButton from "../components/UI/PrimaryButton";
import Title from "../components/UI/Title";
import Number from "../components/Game/Number";

export default function GameScreen({ selectedNumber, guessNumber, onGuess }) {
  function validateGuess(direction) {
    if (
      (+guessNumber > +selectedNumber && direction === "HIGHER") ||
      (+guessNumber < +selectedNumber && direction === "LOWER")
    ) {
      Alert.alert("Error", "Don't lie, friends don't lie", [
        {
          text: "Ok",
          style: "destructive",
        },
      ]);
    } else {
      if (direction === "HIGHER") {
        onGuess(selectedNumber, 99);
      } else if (direction === "LOWER") {
        onGuess(1, selectedNumber);
      }
    }
  }

  return (
    <View style={styles.mainContainer}>
      <Title color="white">Opponent's Guess</Title>
      <Number color={Colors.blue900}>{guessNumber}</Number>
      <Text style={styles.text}>Higher or lower?</Text>
      <PrimaryButton
        onPress={() => validateGuess("HIGHER")}
        textSize={24}
        style={styles.button}
        textColor="white"
      >
        +
      </PrimaryButton>
      <PrimaryButton
        onPress={() => validateGuess("LOWER")}
        textSize={24}
        style={styles.button}
        textColor="white"
      >
        -
      </PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 60,
    alignItems: "center",
  },
  button: {
    width: 240,
    height: 35,
    marginVertical: 4,
    backgroundColor: Colors.green500,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  text: {
    marginVertical: 10,
    fontSize: 20,
    fontWeight: "600",
    color: "white",
  },
});
