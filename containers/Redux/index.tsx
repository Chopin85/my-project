import React from "react";
import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
  resetCounter,
} from "../../providers/counter/actions";

import Headers from "../../components/Header";
import Button from "../../components/Button";

import styles from "./styles";

export default function ReduxSaga() {
  const counter = useSelector((state) => state?.counter);

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Headers title="Redux" />
      <Text style={styles.counter}>COUNTER {counter.count}</Text>
      <View style={styles.buttonGroup}>
        <Button
          title="increment"
          onPress={() => dispatch(incrementCounter())}
        ></Button>
        <Button
          title="decrement"
          onPress={() => dispatch(decrementCounter())}
        ></Button>
        <Button title="reset" onPress={() => dispatch(resetCounter())}></Button>
      </View>
    </View>
  );
}
