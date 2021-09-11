import { combineReducers } from "redux";
import courseReducer from "./createCourseReducer";

const rootReducer = combineReducers({
  courseReducer,
});

export default rootReducer;
