import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/UserSlices";

// when we click on add button. first it go to the store(1) then check on reducers for slice(2) and match the slice then go the the macro-reducer(3) at last to from the function

//----1(request from user click on add btn from screen)
// CENTRELISED STORE WHICH CONTAIN STATE
// configure acept only one object--------------
const store = configureStore({
 //if this is a single function, it will be directly used as root-reducer for the store.

//if it is an object of slice reducers, like
// {users: userReducer, posts:postsReducer}, configureStore will automatically create the root reducer by passing this object to the Redux combineReducer utility.
    reducer : {    
        users: userSlice.reducer,
    },
})

export default store;