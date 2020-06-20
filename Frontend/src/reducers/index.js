import { combineReducers } from "redux";
import auth from "./user";


const reducers = combineReducers({
  auth: auth,
});


export default reducers;