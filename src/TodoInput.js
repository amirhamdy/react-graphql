import React, {Component} from 'react';
import {Button, Input} from "semantic-ui-react";
import {ADD_TODO, GET_TODOS} from "./TodosContainer";
import {Mutation} from '@apollo/react-components';

class AddTodo extends Component {
  state = {item: ''};

  onChange = (e) => {
    this.setState({item: e.target.value});
  };

  render() {
    return (
      <Mutation mutation={ADD_TODO}>
        {(addTodo, {data}) => (
          <form
            onSubmit={e => {
              e.preventDefault();
              addTodo({
                variables: {user_id: '1', task: this.state.item, done: false},
                // refetchQueries: [{query: GET_TODOS}]
              });
              this.setState({item: ''});
              this.props.refetchTodos();
            }}>
            <Input focus placeholder='What TODO...' onChange={this.onChange} value={this.state.item}/>
            <Button primary>Add</Button>
          </form>
        )}
      </Mutation>
    );
  }
};

export default AddTodo;
