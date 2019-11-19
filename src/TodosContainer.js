import React from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import TodoList from "./TodoList";

export const GET_TODOS = gql`{ todos { id task done } }`;

export default () => (
  <Query query={GET_TODOS}>
    {({loading, data}) => !loading && (<TodoList todos={data.todos}/>)}
  </Query>
);
