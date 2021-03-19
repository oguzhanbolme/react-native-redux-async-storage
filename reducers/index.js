import counterReducer from "./counter"
import { combineReducers } from "redux"

const allReducers = combineReducers({
    counter:counterReducer
})

export default allReducers