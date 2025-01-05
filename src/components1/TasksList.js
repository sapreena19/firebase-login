import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import MyVerticallyCenteredModal from './updateTask';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedTask,removeFromList, getTasksFromServer} from '../slices/tasksSlice';

 const TasksList=()=>{
  const{tasksList}=useSelector((state)=>state.tasks)
  const dispatch=useDispatch()
  const updateTask=(tasks)=>{
    console.log('update Task')
    setModalShow(true)
    dispatch(setSelectedTask(tasks))
  }
  useEffect(()=>{
    dispatch(getTasksFromServer())

  },[dispatch])
  const deleteTask=(tasks)=>{
    console.log('delete Task')
    dispatch(removeFromList(tasks))
  }
  const[modalShow,setModalShow]=useState(false)
  return (
    <>
    <Table striped bordered hover>
      <thead>
        <tr className='text-center'>
          <th>#</th>
          <th>Title</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          tasksList && tasksList.map((tasks,index)=>{
            return(

              <tr className='text-center'key={tasks.id}>
              <td>{index+1}</td>
              <td>{tasks.title}</td>
              <td>{tasks.description}</td>
              <td><Button variant="primary"className='mx-3'onClick={()=>updateTask(tasks)}>
                <i className="bi bi-pencil-square"></i></Button>
              <Button variant="primary"><i className="bi bi-trash3"onClick={()=>deleteTask(tasks)}>
                </i></Button></td>
            </tr>
            
            )

            })
            }
        
        
        </tbody>
        </Table>
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </>
  );
};
export default TasksList