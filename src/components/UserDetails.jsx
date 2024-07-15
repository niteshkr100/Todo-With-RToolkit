import React from 'react'
import DeleteAll from './DeleteAll'
import { fakeUserData } from '../api' 
import { useDispatch } from 'react-redux'
import {addUser} from '../store/slices/UserSlices' //import actionCreator
import DisplayUser from './DisplayUser'


//for storing data fronted data at store we need to thing
//1)useDispatch(trigger action)
//2)action creator(as we need this b/c there is no type:"inc" like redux)

const UserDetails = () => {

 const dispatch = useDispatch();  //4)-----usedispatch to trigger action

 const addNewUser = (payload) =>{
   console.log(payload);
   dispatch(addUser(payload))//dispatch({type:'increment'}) in redux but in RTK dispatch directly call the function 
 }

  return (
 <div>
    <div className="container">

         <div className="addContainer">
         <input type="text" placeholder='✍🏻click + for List of user'/>
          <i className="fa-solid fa-plus add" onClick={()=> addNewUser(fakeUserData())}></i>
         </div>

         <div className="addData">
             <DisplayUser/>    
         </div>

         <DeleteAll/>
    </div>
</div>
  )
}

export default UserDetails
