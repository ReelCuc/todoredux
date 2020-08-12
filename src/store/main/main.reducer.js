import { TASK_ADD, TASK_DELETE, TASK_COMPLETE, FILTERTYPE_CHANGE } from './main.actions'

const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],
  filterType: 'all'
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
  const updatedTasks = state.tasks.filter(task => task.id !== action.id)
  
  saveTasks(updatedTasks)

  return { ...state, tasks: updatedTasks }
}

const toggleTask = (state, action) => {
  const updatedTasks = state.tasks.map(task =>
    task.id === action.payload.id ? ({ ...task, isCompleted: !action.payload.isCompleted }) : task
  )

  saveTasks(updatedTasks)

  return { ...state, tasks: updatedTasks }
}

const handleFilterTypeChange = (state, action) => ({ ...state, filterType: action.filterType })

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASK_ADD:
      return handleTaskAdd(state, action)

    case TASK_DELETE:
      return handleTaskDelete(state, action)

    case TASK_COMPLETE:
      return toggleTask(state, action)

    case FILTERTYPE_CHANGE:
      return handleFilterTypeChange(state, action)

    default:
      return state
  } 
}