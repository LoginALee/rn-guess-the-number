import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { Colors } from "../constants/colors";
import PrimaryButton from "../components/UI/PrimaryButton";
import Box from "../components/UI/Box";
import Title from "../components/UI/Title";

export default function StartGameScreen({ onSelectNumber }) {
  const [temporalSelectedNumber, setTemporalSelectedNumber] = useState("");
  const isValidNumber = (number) => !isNaN(number) && number >= 0;

  function saveSelectedNumber() {
    setTemporalSelectedNumber(temporalSelectedNumber);

    if (!isValidNumber(temporalSelectedNumber)) {
      Alert.alert("Error", "Your number should be positive!", [
        {
          text: "Ok",
          onPress: resetSelectedNumber,
          style: "destructive",
        },
      ]);
      return;
    }

    onSelectNumber(temporalSelectedNumber);
  }

  function resetSelectedNumber() {
    setTemporalSelectedNumber("");
    onSelectNumber("");
  }

  return (
    <KeyboardAvoidingView>
      <View style={styles.mainContainer}>
        <Title style={{ marginBottom: 12 }} color="white">
          Guess my number
        </Title>
        <Box>
          <TextInput
            style={styles.textInput}
            inputMode="numeric"
            maxLength={2}
            placeholder="Enter a number..."
            placeholderTextColor={"white"}
            value={temporalSelectedNumber}
            onChangeText={setTemporalSelectedNumber}
          />
          <View style={styles.buttonsContainer}>
            <PrimaryButton
              style={styles.button}
              textColor="white"
              textSize={18}
              onPress={resetSelectedNumber}
            >
              Reset
            </PrimaryButton>
            <PrimaryButton
              textSize={18}
              style={styles.button}
              textColor="white"
              onPress={saveSelectedNumber}
            >
              Confirm
            </PrimaryButton>
          </View>
        </Box>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 60,
    flexDirection: "column",
    flex: 1,
  },
  textInput: {
    flex: 1,
    color: "white",
    fontSize: 28,
    fontFamily: "RobotoMono_400Regular",
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
    backgroundColor: Colors.green700,
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
