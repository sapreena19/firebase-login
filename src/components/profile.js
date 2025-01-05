import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addTaskToList } from '../slices/tasksSlice';
import Table from 'react-bootstrap/Table';
import MyVerticallyCenteredModal from './updateTask';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedTask,removeFromList, getTasksFromServer} from '../slices/tasksSlice';


//port { TableBody, TableCell, TableRow,Table,TableHead} from '@mui/material';

function Profile() {
  const {tasksList,error}=useSelector((state)=>state.tasks)
  const dispatch=useDispatch('')
  const[title,setTitle]=useState('')
     const[description,setDescription]=useState('')
     const addTask=(e)=>{
         e.preventDefault()
         console.log({title,description})
         dispatch(addTaskToList({title,description}))
         setTitle('')
         setDescription('')
     }
    

  const [users, setUsers] = useState(null);
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);

      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUsers(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }
  return (
    <>
   
    <h1 className='text-center my-4 text-primary'>Project Management</h1>
    <p className="text-center lead">Currently {tasksList.length} task(s) pending </p>
    {
      (error!=='')?<h5 className='text-center text-danger'>{error}</h5>:null
    }
    <section className='my-5'>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Task Title</Form.Label>
        <Form.Control type="text"placeholder="Enter Task Title" value={title}
        onChange={(e)=>setTitle(e.target.value)}/>

      </Form.Group>
<Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Task Description</Form.Label>
        <Form.Control type="text"placeholder="Enter Task Description" value={description}
        onChange={(e)=>setDescription(e.target.value)}/>
      </Form.Group>
      <div className='text-end'>
      <Button variant="primary" type="submit"onClick={(e)=>addTask(e)}>
        Addtask
      </Button>
      </div>
    </Form>
    </section>
   
    <div>
          <button className="btn btn-primary" onClick={handleLogout}>
            Logout
          </button>
    </div>
   
    </>
  )
  
}
export default Profile;