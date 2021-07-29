/* eslint-disable no-empty */
import React from "react";
import { Text, View } from "react-native";

import { NativeRouter, Switch, Route, Link } from "react-router-native";
import { StatusBar } from "expo-status-bar";
import { useInjectSaga } from "../../utils/redux/injectSaga";
import cocktailSaga from "../../providers/cocktail/saga";
import HomePage from "../Homepage";
import Redux from "../Redux";
import ReduxSaga from "../ReduxSaga";
import styles from "./styles";

const App: React.FC = () => {
  useInjectSaga({ key: "cocktail", saga: cocktailSaga });

  return (
    <>
      <StatusBar style="dark" />
      <NativeRouter>
        <View style={styles.nav}>
          <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>Home</Text>
          </Link>
          <Link to="/redux" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>Redux</Text>
          </Link>
          <Link to="/reduxsaga" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>Redux-Saga</Text>
          </Link>
        </View>
        <Switch>
          <Route exact path="/" component={ReduxSaga} />
          <Route path="/redux" component={Redux} />
          <Route path="/reduxsaga" component={ReduxSaga} />
        </Switch>
      </NativeRouter>
    </>
  );
};

export default App;
