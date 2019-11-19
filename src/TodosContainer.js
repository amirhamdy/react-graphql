import React from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import TodoList from "./TodoList";

export const GET_TODOS = gql`{ todos { id task done } }`;
export const ADD_TODO = gql`mutation createTodo($task: String!)
  {createTodo(input: {task: $task, user_id: "", done: false}) {id task done}}`;

export default () => (
  <Query query={GET_TODOS} pollInterval={45000}>
    {({loading, data, refetch}) => {
      return loading ? <h1>Loading...</h1> : <TodoList todos={data.todos}/>;
    }}
  </Query>
);
