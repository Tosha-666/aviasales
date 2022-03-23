import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {App} from "./Components/App";
import { AviaSalesProvider } from "./Components/AviasalesContext";

import store from './store'

ReactDOM.render(
<Provider store={store}>
  <AviaSalesProvider>
    <App />
  </AviaSalesProvider>
</Provider>
    

    ,document.getElementById("root")
);
