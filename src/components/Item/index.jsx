import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  state = {
    mouse: false
  }
  handleMouse = (v) => {
    return () => {
      this.setState({ mouse: v })
    }
  }
  handleCheck = (id) => {
    return (e) => {
      // console.log(e.target.checked,id)
      this.props.updateTodo(id, e.target.checked)
    }
  }
  handleDelete(id) {
    if(window.confirm('确定删除该项任务吗？')){
      this.props.deleteTodo(id)
    }
  }
  render() {
    let { id, name, done } = this.props
    let { mouse } = this.state
    return (
      <li style={{ background: mouse ? '#ddd' : 'white' }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }} onClick={() => { this.handleDelete(id) }} >删除</button>
      </li>
    )
  }
}
