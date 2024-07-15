import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser  } from '../store/slices/UserSlices'

const DisplayUser = () => {
 //useSelector helps to access the state data of reducer in store
  const data = useSelector((state)=>{ //state means whole state data inside store 
           //5--------useselector
    return state.users
  })

  //state data of users reducer
  console.log(data);

  //remove user
  const dispatch = useDispatch()

  const removeOldUser = (deleteid)=>{
     dispatch(removeUser(deleteid)); 
  }

  return (
    <div>
       {
        data.map((elem, index)=>{
            return(
                <div className="addContainer databox" key={index}>
                <p>{elem}</p>
                <span className="material-symbols-outlined trash" onClick={()=> removeOldUser(index)}>
                   delete
                </span>  
             </div>
            )
        })
            
      
       }
    </div>
  )
}

export default DisplayUser
