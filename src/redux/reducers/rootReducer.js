import {combineReducers} from "redux";
import {HeaderReducers} from "./HeaderReducers"
import {UserReducer} from "./UserReducer"
import {AdminReducers} from "./adminReducer";


export const rootReducer = combineReducers({
	HeaderReducers,
	UserReducer,
	AdminReducers
})