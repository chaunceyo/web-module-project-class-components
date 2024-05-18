import React from 'react'
import Form from './Form'
import TodoList from './TodoList'

let id = 0
let getId = () => ++id

const initialTodos = [
    {
      name: 'Organize Garage',
      id: getId(), // could look different, you could use a timestamp to generate it
      completed: false
    },
    {
      name: 'Bake Cookies',
      id: getId(),
      completed: false
    }
  ]

export default class App extends React.Component {
  state = {
    todos: initialTodos,
    showAll: true

  }

  addTodo = (name) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.concat({ id: getId(), completed: false, name})
    })
  }

  toggleCompletion = id => {
    this.setState({
      ...this.state, 
      todos: this.state.todos.map(td => {
        if(id == td.id) return {...td, completed: !td.completed}
        return td
      })
    }
    )
  }

  toggleShowAll = () => {
    this.setState({
      ...this.state,
      showAll: !this.state.showAll
    })
  }
  
  render() {
    //const filtered = this.state.todos.filter(td => !td.completed || this.state.showAll)
    return (
      <div>
        <TodoList todos={this.state.todos} toggleCompletion={this.toggleCompletion} showAll={this.state.showAll}/>
        <Form addTodo={this.addTodo}/>
        <button onClick={this.toggleShowAll}>{this.state.showAll ? 'Hide Completed' : 'Show All'} </button>
      </div>
    )
  }
}
