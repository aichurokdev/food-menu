import { Reducer } from "./reducer/reducer";
import { createStore } from "redux";

export const store = createStore(Reducer)