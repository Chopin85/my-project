import React from "react";
import { Provider } from "react-redux";

// import * as i18n from "./services/i18n";
import store from "./store";
import App from "./containers/App";

const Root: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <App />
      </Provider>
    </>
  );
};

export default Root;
