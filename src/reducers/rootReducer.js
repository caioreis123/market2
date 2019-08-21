import someReducer from "./someReducer"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
	someState: someReducer,
})

export default rootReducer
