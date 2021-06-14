import {combineReducers} from "redux";
import goodReducer from "./reducers/good";

export default combineReducers({
    goods: goodReducer 
})