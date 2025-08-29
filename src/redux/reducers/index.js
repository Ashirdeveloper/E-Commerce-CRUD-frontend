import { combineReducers } from "@reduxjs/toolkit"
import AuthReducer from "../Slices/AuthSlice"

const rootReducers = combineReducers({
    Auth: AuthReducer
})

export { rootReducers }
