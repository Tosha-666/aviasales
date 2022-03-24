import { createStore } from "redux";
import { reduser } from "./redusers";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(reduser, applyMiddleware(thunk))

export default store