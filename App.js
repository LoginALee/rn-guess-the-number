import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground } from "react-native";
import GameScreen from "./screens/GameScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient style={styles.gradient} colors={["#cce4e4", "#3c8080"]}>
      <ImageBackground
        source={require("./assets/images/casino.jpg")}
        style={styles.rootContainer}
        imageStyle={styles.imageBackground}
        resizeMode="cover"
      >
        <View style={styles.gameContainer}>
          <StatusBar style="auto" />
          <GameScreen />
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
