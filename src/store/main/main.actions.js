export const TASK_ADD = 'TASK_ADD' // const string

export const taskAdd = content => ({ // action creator create plane object action
  type: TASK_ADD,
  content
})