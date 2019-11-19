import React, {Component} from 'react';
import {Button, Input} from "semantic-ui-react";

class TodoInput extends Component {
  state = {item: ''};

  onChange = (e) => {
    this.setState({item: e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.item);
    this.setState({item: ''}, function () {
      this.refs.item.focus();
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input focus placeholder='What TODO...' onChange={this.onChange} value={this.state.item} ref="item"/>
        <Button primary>Add</Button>
      </form>
    );
  }
}

export default TodoInput;
