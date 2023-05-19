import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen() {
  const [selectedNumber, setSelectedNumber] = useState("");
  const isValidNumber = (number) => !isNaN(number) && number >= 0;

  function saveSelectedNumber() {
    if (!isValidNumber(selectedNumber)) {
      Alert.alert("Error", "Your number should be positive!", [
        {
          text: "Ok",
          onPress: resetSelectedNumber,
          style: "destructive",
        },
      ]);
    }

    setSelectedNumber(selectedNumber);
  }

  function resetSelectedNumber() {
    setSelectedNumber("");
    console.log(selectedNumber);
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.boxContainer}>
        <TextInput
          style={styles.textInput}
          inputMode="numeric"
          maxLength={2}
          placeholder="Enter a number..."
          placeholderTextColor={"#e4e3df"}
          value={selectedNumber}
          onChangeText={setSelectedNumber}
        />
        <View style={styles.buttonsContainer}>
          <PrimaryButton
            style={styles.button}
            textColor="#e4e3df"
            textSize={18}
            onPress={resetSelectedNumber}
          >
            Reset
          </PrimaryButton>
          <PrimaryButton
            textSize={18}
            style={styles.button}
            textColor="#e4e3df"
            onPress={saveSelectedNumber}
          >
            Confirm
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 80,
    flexDirection: "column",
    backgroundColor: "#cce4e4",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  boxContainer: {
    flexDirection: "column",
    minWidth: "90%",
    minHeight: "22%",
    backgroundColor: "#9dc9b9",
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
  textInput: {
    flex: 1,
    color: "#e4e3df",
    fontSize: 28,
  },
  buttonsContainer: {
    flexDirection: "column",
    textAlign: "center",
    flex: 1,
  },
  button: {
    width: 200,
    height: 35,
    marginVertical: 4,
    backgroundColor: "#8fa091",
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
});
