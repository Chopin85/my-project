import React from "react";
import { Button, View } from "react-native";
import styles from "./styles";

interface Props {
  title: string;
  onPress(): void;
}
const Header: React.FC<Props> = ({ title, onPress }) => {
  return (
    <View style={styles.button}>
      <Button title={title} onPress={onPress} color="#f194ff"></Button>
    </View>
  );
};

export default Header;
