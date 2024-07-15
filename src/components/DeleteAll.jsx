import React from 'react'
import { useDispatch } from 'react-redux'
// import { deleteUser } from '../store/slices/UserSlices';
import { deleteUser} from '../store/actions/index';
 

const DeleteAll = () => {

const dispatch = useDispatch();

  const deleteAllUser = () =>{
    dispatch(deleteUser())
  }

  return (
    
    <div>
    <div className="deletearea ss">
        <button className='btndelete' onClick={()=> deleteAllUser()}>Delete All</button>
    </div>
    </div>
   
  )
}

 

export default DeleteAll
