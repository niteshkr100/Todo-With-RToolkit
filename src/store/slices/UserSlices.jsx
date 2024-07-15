import { createSlice } from "@reduxjs/toolkit";
import { deleteUser } from "../actions";

//createSlice is a slice function which take object as input that contains
// --->slice name
// --->initialState
// --->reducers that contain object which have many macro reducers

// by using this we do not need to declare type like increment, decrement and match in reducer function in switch case (in redux this happen)

//UserSlice(slice) is used when we have common use case like in list  we have to delete, add and remove all list

const userSlice = createSlice({ //here state means this whole state
  name : "user",
  initialState : [],
  reducers : { //-----3 userSlice-actions Creator
    addUser(state, action){
      state.push(action.payload)  //by default reduxtoolkit used immur due to which there is no tension of immmutability(do not support mutable) in case of state.push
      console.log(action.payload + "1")
    },  //macro reducer
    removeUser(state, action){
      //  console.log("hii" + action.payload)
      // let indexOfUser = state.indexOf(action.payload) //other way to pass index by using user directly as a parameter and exract index here

      state.splice(action.payload, 1)

    }, //macro reducer
    // deleteUser(state, action){
    //     //  console.log("deleteAll");

    //   return []; //return state as empty array
        
    //   // state.splice(0, state.length);//other way to delete data
  
    // } //macro reducer
  },
  

  extraReducers(builder){
    // builder.addCase(userSlice.actions.deleteUser,()=>{ 
    builder.addCase(deleteUser ,()=>{
      return [];
    })
  }

})

console.log(userSlice.actions);

export default userSlice;
// export const {addUser, removeUser, deleteUser} = userSlice.actions; //export actionCreator
export const {addUser, removeUser } = userSlice.actions; //export actionCreator
 
 
// ---------------------------------------notes---------------------------------------
//splice method (splice method in js is used to modify an array byadd or delete item)
// splice(param1, param2, param3, param4)
// param-1---->index no. to be deleted
// param-2----> no of item deleted from that index point
// param-2----> no of item deleted from that index point

// explaination
// arrayBuffer.splice(start, deleteCount, item1, item2, ..)
// start: the index at which to start changing the array.
//  deleteCount: the number of elements to remove.
// if this is set to 0, no element will be removed.
// item1, item2, .... The element to add to the array, starting at the start index

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice