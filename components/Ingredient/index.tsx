import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

interface Props {
  image: string;
  text: string;
}

const Ingredient: React.FC<Props> = ({ image, text }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Ingredient;
