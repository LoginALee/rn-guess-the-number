import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  SafeAreaView,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  RobotoMono_400Regular,
  RobotoMono_700Bold,
} from "@expo-google-fonts/roboto-mono";
import { Colors } from "./constants/colors";
import StartGameScreen from "./screens/StartGameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";

const missedGuesses = new Set();

export default function App() {
  const [selectedNumber, setSelectedNumber] = useState("");
  const [guessNumber, setGuessNumber] = useState("");
  const [isGameOver, setIsGameOver] = useState(true);
  const [rounds, setRounds] = useState(-1);
  let currentScreen;

  const [fontsLoaded] = useFonts({
    RobotoMono_400Regular,
    RobotoMono_700Bold,
  });

  useEffect(() => {
    if (selectedNumber !== "" && selectedNumber === guessNumber) {
      endGame(selectedNumber);
    }
  }, [guessNumber, isGameOver, selectedNumber]);

  function restartGame() {
    setSelectedNumber("");
    setGuessNumber("");
    setIsGameOver(true);
    missedGuesses.clear();
    setRounds(0);
  }

  function endGame(number) {
    Alert.alert("Success", `Got it!, your number is ${number}!`, [
      {
        text: "Hurraaay!",
        style: "default",
      },
    ]);
    setIsGameOver(true);
    missedGuesses.clear();
  }

  function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

    if (+randomNumber === +selectedNumber) {
      endGame(randomNumber);
    }
    if (missedGuesses.has(randomNumber)) {
      return getRandomNumber(min, max);
    }
    return randomNumber;
  }

  function generateGuessedNumber(min = 1, max = 100) {
    let randomNumber = getRandomNumber(min, max);

    missedGuesses.add(randomNumber);
    setGuessNumber(randomNumber);
    setRounds((prevState) => Math.abs(prevState + 1));
  }

  function selectNumberHandler(number) {
    setSelectedNumber(number);
    setIsGameOver(false);
    generateGuessedNumber();
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  if (!selectedNumber) {
    currentScreen = <StartGameScreen onSelectNumber={selectNumberHandler} />;
  } else {
    currentScreen = (
      <GameScreen
        selectedNumber={selectedNumber}
        onGuess={generateGuessedNumber}
        guessNumber={guessNumber}
        guesses={missedGuesses}
      />
    );
  }

  if (isGameOver && selectedNumber) {
    currentScreen = (
      <GameOverScreen
        onRestartGame={restartGame}
        rounds={rounds}
        guessNumber={guessNumber}
      />
    );
  }

  return (
    <LinearGradient
      style={styles.gradient}
      colors={[Colors.green100, Colors.blue800]}
    >
      <ImageBackground
        source={require("./assets/images/casino.jpg")}
        style={styles.rootContainer}
        imageStyle={styles.imageBackground}
        resizeMode="cover"
      >
        <View style={styles.gameContainer}>
          <StatusBar style="auto" />
          <SafeAreaView>{currentScreen}</SafeAreaView>
        </View>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  gameContainer: {
    flex: 1,
    alignItems: "center",
  },
  imageBackground: {
    opacity: 0.2,
  },
  gradient: {
    flex: 1,
  },
});
