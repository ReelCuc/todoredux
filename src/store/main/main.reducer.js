import { TASK_ADD, TASK_DELETE } from './main.actions'

const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || []
}

const saveTasks = tasks => localStorage.setItem('tasks', JSON.stringify(tasks))

const handleTaskAdd = (state, action) => {
  if (action.content) {
    const newTask = { id: +new Date(), content: action.content, isCompleted: false }
    
    const updatedTasks = [...state.tasks, newTask]

    saveTasks(updatedTasks)

    return { ...state, tasks: updatedTasks }
  }

  return state
}

const handleTaskDelete = (state, action) => {
  if (action.id) {
    const updatedTasks = state.tasks.filter(task => task.id !== action.id)
    
    saveTasks(updatedTasks)

    return { ...state, tasks: updatedTasks }
  }

  return state
}

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASK_ADD:
      return handleTaskAdd(state, action)

    case TASK_DELETE:
      return handleTaskDelete(state, action)

    default:
      return state
  } 
}