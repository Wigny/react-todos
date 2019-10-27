import React, { Component, Fragment } from "react";

import { graphql } from "react-apollo";
import gql from "graphql-tag";

class TodoList extends Component {
  renderTodoList = () => (
    <ul>
      {this.props.todos.todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );

  render() {
    const { todos } = this.props;

    return (
      <Fragment>
        {
          todos.loading ? <p>Carregando...</p> : this.renderTodoList()
        }
      </Fragment>
    );
  }
}


const TodosQuery = gql`
  query getMyTodos {
    todos {
      id
      text
    }
  }
`;

export default graphql(TodosQuery, { name: 'todos' })(TodoList);