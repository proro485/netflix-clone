import { createStore } from "@reduxjs/toolkit";
import loginReducer from "./loginReducer";

const store = createStore(loginReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;