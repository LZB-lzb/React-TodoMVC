// import logo from './logo.svg';
import React from 'react';
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css';

class App extends React.Component {
  state = {
    todos: [{
      id: '001',
      name: '吃饭',
      done: true
    }, {
      id: '002',
      name: '睡觉',
      done: false
    }, {
      id: '003',
      name: '写代码',
      done: false
    },]
  }
  addTodo = (todo) => {
    const newTodos = [...this.state.todos, todo]
    this.setState({ todos: newTodos })
  }
  updateTodo = (id, done) => {
    const { todos } = this.state
    const newTodos = todos.map((todo) => {
      if (todo.id === id) return { ...todo, done }
      else return todo
    })
    this.setState({ todos: newTodos })
  }
  deleteTodo = (id) => {
    const { todos } = this.state
    let newTodos = todos.filter(todo => todo.id !== id)
    this.setState({ todos: newTodos })
  }
  CheckAll = (done) => {
    const { todos } = this.state
    const newTodos = todos.map((todo) => {return {...todo,done}})
    this.setState({ todos: newTodos })
  }
  ClearAllDone=()=>{
    const { todos } = this.state
    let newTodos = todos.filter(todo => !todo.done)
    this.setState({ todos: newTodos })
  }
  render() {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
          <Footer todos={todos} CheckAll={this.CheckAll} ClearAllDone={this.ClearAllDone}/>
        </div>
      </div>
    )
  }
}

export default App;
