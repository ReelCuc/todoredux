import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, ToggleButton } from 'react-bootstrap'

import { taskDelete } from '../../store/main/main.actions'

import './Task.css'


class Task extends Component {

  handleChange = () => {
    const { completeTask, id } = this.props

    completeTask(id)
  }

  handleClick = () => {
    const { id, dispatch } = this.props

    dispatch(taskDelete(id))
  }

  render() {
    const { id, content, isCompleted } = this.props

    return (
      <div className='task'>

        <span className={isCompleted ? 'success' : ''} >{content}</span>

        <div className='bitns'>
        <ToggleButton
          type="checkbox"
          variant="outline-success"
          checked={isCompleted}
          onChange={this.handleChange}
          size='sm'
          className='checkbox'
        >
          Done
        </ToggleButton>

        <Button
          variant='outline-dark'
          onClick={this.handleClick}
          size='sm'
        >
          ×
        </Button>
        </div>
      </div>
    )
  }
}

export const ConnectedTask = connect(null, dispatch => ({ dispatch }))(Task)
