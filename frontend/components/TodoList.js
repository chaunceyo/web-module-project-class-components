import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  // state = {
  //   showAll: true
  // }

  // toggleShowAll = () => {
  //   this.setState({
  //     ...this.state,
  //     showAll: !this.state.showAll
  //   })
  // }
  render() {
    const { todos, toggleCompletion, showAll} = this.props
    const filtered = todos.filter(td => !td.completed || showAll)
    return (
      <div>
        {
          filtered.map(todo => ( <Todo key={todo.id} todo={todo} toggleCompletion={toggleCompletion}/>))
        }
      </div>
    )
  }
}
