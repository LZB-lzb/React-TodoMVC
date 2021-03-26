import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  handleCheckAll = (event) => {
    this.props.CheckAll(event.target.checked)
  }
  handleClearAllDone = () => {
    if (window.confirm('是否清除所有已完成任务？')) {
      return this.props.ClearAllDone()
    }
  }
  render() {
    const { todos } = this.props
    // let doneCount=todos.filter(i=>i.done===true).length
    let doneCount = todos.reduce((pre, cur) => pre + (cur.done ? 1 : 0), 0)
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={doneCount === todos.length && todos.length} onChange={this.handleCheckAll} />
        </label>
        <span>
          <span>已完成{doneCount}</span> / {todos.length}
        </span>
        <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
      </div>
    )
  }
}
