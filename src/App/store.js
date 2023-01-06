import { configureStore } from '@reduxjs/toolkit'
import taskSilce from '../features/tasks/taskSilce'

export const store = configureStore({
  reducer: {
    tasks: taskSilce
  },
})

export default taskSilce.reducer