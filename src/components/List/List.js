import React, { Component } from 'react'
import { connect } from 'react-redux'

import { ConnectedTask as Task } from '../Task/Task'

import './List.css'

class List extends Component {
  state = {
    filteredTasks: []
  }

  componentDidUpdate(prevProps) {
    if (this.props.filterType !== prevProps.filterType) {
      if (this.props.filterType === 'success') {
        const updatedTasks = this.props.tasks.filter(task => task.isCompleted)

        return this.setState({ filteredTasks: updatedTasks })
      }

      if (this.props.filterType === 'unsuccess') {
        const updatedTasks = this.props.tasks.filter(task => !task.isCompleted)

        return this.setState({ filteredTasks: updatedTasks })
      }
    }
  }

  render() {
    const { filteredTasks } = this.state
    const { tasks, filterType } = this.props

    const currentTasks = filterType === 'all' ? tasks : filteredTasks

    return (
      <div className='list'>
        {currentTasks.map(task => 
          <Task
            key={task.id}
            id={task.id}
            content={task.content}
            isCompleted={task.isCompleted}
          />
        )}
      </div>
    )
  }
}

export const ConnectedList = connect(store => ({ tasks: store.main.tasks, filterType: store.main.filterType }), null)(List)