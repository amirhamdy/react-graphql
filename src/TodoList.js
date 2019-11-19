import React, {Component} from 'react';
import TodoItems from "./TodoItems";
import TodoInput from "./TodoInput";
import {Segment} from "semantic-ui-react";

class TodoList extends Component {
  state = {todos: this.props.todos || []};

  addTodo = (item) => {
    const itemObj = {done: false, task: item};
    this.setState({todos: this.state.todos.concat([itemObj])});
  };

  render() {
    return (
      <Segment style={{padding: '3em', margin: '1em 20em'}}>
        <h2>TODO List</h2>
        <TodoItems items={this.state.todos}/>
        <TodoInput addTodo={this.addTodo}/>
      </Segment>
    );
  }
}

export default TodoList;
