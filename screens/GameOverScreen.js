import React from "react";
import {
  Image,
  View,
  StyleSheet,
  Text,
  useWindowDimensions,
} from "react-native";
import { Colors } from "../constants/colors";
import Title from "../components/UI/Title";
import PrimaryButton from "../components/UI/PrimaryButton";

export default function GameOverScreen({ onRestartGame, rounds, guessNumber }) {
  const { width, height } = useWindowDimensions();

  let imageStyles = {
    width: width > 800 ? 110 : 300,
    height: height < 500 ? 110 : 300,
    borderRadius: height < 500 ? 55 : 150,
  };

  return (
    <View style={styles.mainContainer}>
      {console.log({ width, height })}
      <Title color={"white"}>Game Over!</Title>
      <View
        style={[
          styles.imageContainer,
          { width: imageStyles.width, height: imageStyles.height },
        ]}
      >
        <Image
          source={require("../assets/images/mountain.png")}
          resizeMethod="scale"
          style={[styles.image, { borderRadius: imageStyles.borderRadius }]}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Your phone needed <Text style={styles.boldText}>{rounds}</Text> rounds
          to guess the number <Text style={styles.boldText}>{guessNumber}</Text>
        </Text>
      </View>

      <PrimaryButton
        textColor={"white"}
        textSize={18}
        style={styles.button}
        onPress={onRestartGame}
      >
        Start new game!
      </PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 40,
    margin: 10,
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    marginTop: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 150,
  },
  textContainer: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    color: "white",
    fontFamily: "RobotoMono_400Regular",
  },
  boldText: {
    fontSize: 22,
    color: Colors.blueMint,
    fontFamily: "RobotoMono_700Bold",
  },
  button: {
    width: 200,
    height: 50,
    marginTop: 18,
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
});
