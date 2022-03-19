import { combineReducers } from "redux";
import userReducer from "./userReducer";
import jobReducer from "./jobReducer";

// ===========================COMBINE REDUCER=========================== //
const reducer = combineReducers({ userReducer, jobReducer });

export default reducer;
