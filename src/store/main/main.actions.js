export const TASK_ADD = 'TASK_ADD' // const string
export const TASK_DELETE = 'TASK_DELETE'

export const taskAdd = content => ({ // action creator create plane object action
  type: TASK_ADD,
  content
})

export const taskDelete = id => ({
  type: TASK_DELETE,
  id
})