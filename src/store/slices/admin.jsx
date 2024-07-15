import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name : "admin",
    initialState: [],
    reducers: {
        power(state, action){
            console.log("power");
        },
        

    }
})
