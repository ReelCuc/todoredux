import React, { Component } from 'react'

import { ConnectedControl as Control } from '../../components/Control/Control'
import { ConnectedList as List } from '../../components/List/List'


import './App.css'

class App extends Component {
  state = {
    tasks: JSON.parse(localStorage.getItem('tasks')) || [],
    filter: 'whole'
  }

  // addTask = text => {
  //   const { tasks } = this.state

  //   const newTask = { id: +new Date(), content: text, isCompleted: false }
  //   const updatedTasks = [...tasks, newTask]

  //   this.setState({ tasks: updatedTasks }, this.saveTasks)
  // }

  deleteTask = id => {
    const { tasks } = this.state

    const updatedTasks = tasks.filter(task => task.id !== id)

    this.setState({ tasks: updatedTasks }, this.saveTasks)
  }

  completeTask = id => {
    const { tasks } = this.state

    const updatedTasks = [...tasks]
    const index = updatedTasks.findIndex( task => task.id === id)
    
    updatedTasks[index].isCompleted = !updatedTasks[index].isCompleted

    this.setState({ tasks: updatedTasks }, this.saveTasks)
  }

  setFilter = filter => this.setState({ filter })


  render() {
    const { tasks, filter } = this.state

    return (
      <div className='block'>
        <h3>Do ur thing and get the hell out of here</h3>
        <Control filter={filter} setFilter={this.setFilter} />
        <List deleteTask={this.deleteTask} completeTask={this.completeTask} tasks={tasks} filter={filter} />
      </div>
    )
  }
}

export { App }





/*
  completeTask = id => {
    const { tasks } = this.state

        const checkedTasks = tasks.map(task =>
          task.id === id ? ({ ...task, isCompleted: !task.isCompleted }) : task
        )


    const checkedTasks = tasks.map(task => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted
      }
      return task
    })

    this.setState({ tasks: checkedTasks })
  }

  deleteTask = id => {
    const { tasks } = this.state

    tasks.splice(tasks.findIndex(task => task.id === id), 1)

    this.setState({ tasks })
  }
  */