import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    id: "1",
    title: 'task 1',
    description: 'tarea 1 description',
    completed: false
  },
  {
    id: "2",
    title: 'task 2',
    description: 'tarea 2 description',
    completed: false
  }
]

export const taskSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addTask: (state, action)=> {
      state.push(action.payload)
    },
    deleteTask: (state, action)=> {
      return state.filter(task=> task.id !==action.payload)
    },
    updateTask: (state, action)=> {
      
      const {id, title, description} = action.payload
      console.log(id);
      const foundTask = state.find(task => task.id === id)
      console.log(foundTask);
      if(foundTask) {
        foundTask.title = title;
        foundTask.description = description
      }
    }
  },
})

export const { addTask, deleteTask, updateTask } = taskSlice.actions

export default taskSlice.reducer
