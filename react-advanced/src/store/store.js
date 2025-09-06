
// // Legacy --->
// import { createStore } from "redux";
// import counterReducer from "./reducers/counterReducer";

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterReducer";

// const store = createStore(counterReducer)

//New Redux ToolKit

const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})


export default store;