import { TASK_ADD } from './main.actions'

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

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASK_ADD:
      return handleTaskAdd(state, action)

    default:
      return state
  }
}