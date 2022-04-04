import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {App} from "./Components/App";
import { AviaSalesProvider } from "./Components/AviasalesContext";
import { ErrorBoundry } from "./Components/ErrorBoundry";


import store from './store'

ReactDOM.render(
<Provider store={store}>
  <ErrorBoundry> 
    <AviaSalesProvider>
      <App />
    </AviaSalesProvider>
  </ErrorBoundry>
 
</Provider>
    

    ,document.getElementById("root")
);
