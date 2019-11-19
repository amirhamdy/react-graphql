import React, {Component} from 'react';
import {Icon, List, Header} from "semantic-ui-react";

class TodoItems extends Component {
  render() {
    let createItem;

    createItem = (item, index) => {
      return (
        <List.Item key={index}>
          <Icon name='right triangle'/>
          <List.Content>
            <Header as='h4' color={item.done ? 'green' : 'red'}>{item.task}</Header>
          </List.Content>
        </List.Item>
      );
    };
    return (
      <List animated verticalAlign='middle'>
        {this.props.items.map(createItem)}
      </List>);
  }
}

export default TodoItems;
