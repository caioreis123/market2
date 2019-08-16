import { someReducer } from "./someReducer"
import { anotherReducer } from "./anotherReducer"
import { combineReducers } from "redux"

const Reducers = combineReducers({
	someState: someReducer,
	anotherState: anotherReducer,
})
