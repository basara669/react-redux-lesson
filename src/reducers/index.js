import { combineReducers } from "redux";
import count from "./count";

export default combineReducers({ count });
//普通は複数ある
//export default combineReducers({foo, bar, baz})
