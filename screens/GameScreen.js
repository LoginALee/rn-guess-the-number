import React from "react";
import { Text, View, StyleSheet, Alert, FlatList } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../constants/colors";
import PrimaryButton from "../components/UI/PrimaryButton";
import Title from "../components/UI/Title";
import Number from "../components/Game/Number";
import Box from "../components/UI/Box";

export default function GameScreen({
  selectedNumber,
  guessNumber,
  onGuess,
  guesses,
}) {
  const guessesArray = Array.from(guesses);
  const formattedGuesses = guessesArray.map((guess) => ({
    id: `${Math.random()} ${guess}`,
    title: guess,
  }));

  const renderItem = ({ item }) => {
    return (
      <View style={styles.guessContainer}>
        <Text style={styles.guess}>{item.title}</Text>
      </View>
    );
  };

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
      <Box>
        <Number color={Colors.blue900}>{guessNumber}</Number>
        <Text style={styles.text}>Higher or lower?</Text>
        <PrimaryButton
          onPress={() => validateGuess("HIGHER")}
          textSize={24}
          style={styles.button}
          textColor="white"
        >
          <Ionicons name="md-add" size={32} color="white" />
        </PrimaryButton>
        <PrimaryButton
          onPress={() => validateGuess("LOWER")}
          textSize={24}
          style={styles.button}
          textColor="white"
        >
          <Ionicons name="md-remove" size={32} color="white" />
        </PrimaryButton>
      </Box>
      <FlatList
        data={formattedGuesses}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
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
    marginVertical: 6,
    backgroundColor: Colors.blue900,
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
    color: "white",
    fontFamily: "RobotoMono_400Regular",
  },
  guess: {
    color: Colors.blue900,
    marginVertical: 10,
    fontSize: 20,
    fontFamily: "RobotoMono_700Bold",
  },
  guessContainer: {
    marginTop: 20,
    width: 300,
    backgroundColor: Colors.green100,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
