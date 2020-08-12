import React, { Component } from 'react'
import { connect } from 'react-redux'

import { ConnectedTask as Task } from '../Task/Task'

import './List.css'

class List extends Component {
  // filterTasks = () => {
  //   const { tasks, filter } = this.props

  //   let filterFn = () => true

  //   switch (filter) {
  //     case 'done':
  //       filterFn = task => task.isCompleted
  //       break
  //     case 'incomplete':
  //       filterFn = task => !task.isCompleted
  //       break
  //   }

  //   return tasks.filter(filterFn)
  // }

  render() {
    const { deleteTask, completeTask, tasks } = this.props

    // const tasks = this.filterTasks()

    return (
      <div className='list'>
        {tasks.map(task => 
          <Task
            key={task.id}
            id={task.id}
            content={task.content}
            isCompleted={task.isCompleted}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
        )}
      </div>
    )
  }
}

export const ConnectedList = connect(store => ({ tasks: store.main.tasks }), null)(List)