export const TASK_ADD = 'TASK_ADD' // const string
export const TASK_DELETE = 'TASK_DELETE'
export const TASK_COMPLETE = 'TASK_COMPLETE'
export const FILTERTYPE_CHANGE = 'FILTERTYPE_CHANGE'

export const taskAdd = content => ({ // action creator create plane object action
  type: TASK_ADD,
  content
})

export const taskDelete = id => ({
  type: TASK_DELETE,
  id
})

export const taskComplete = (id, isCompleted) => ({
  type: TASK_COMPLETE,
  payload: { id, isCompleted }
})

export const filterTypeChange = filterType => ({
  type: FILTERTYPE_CHANGE,
  filterType
})