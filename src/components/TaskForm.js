
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTask, updateTask } from '../features/tasks/taskSilce';
import {v4 as uuid} from 'uuid'
import { useNavigate, useParams } from 'react-router-dom';

export const TaskForm = () => {

  const [task, setTask] = useState({
    title: '',
    description: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    

      if(params.id) {
        dispatch(updateTask(task))
       
      } else {
        dispatch(addTask({
          ...task,
          id: uuid()}))
        }
        navigate('/')
  }

  
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const tasks = useSelector(state => state.tasks)
  
  useEffect(() => {
    
    console.log(params);
    if(params.id){
        setTask(tasks.find(task => task.id === params.id))
    }
  }, [])
  
  const handleForm = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name='title' type="text" placeholder='title' onChange={handleForm} value={task.title}/>
      <textarea name="description" placeholder="description" onChange={handleForm} value={task.description}></textarea>

      <button >Save</button>
    </form>
  )
}
