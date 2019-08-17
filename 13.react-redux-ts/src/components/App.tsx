import React, { Component } from "react";
import { connect } from "react-redux";
import { ITodo, fetchTodos, deleteTodo } from "../actions";
import { IStoreState } from "../reducers";
import { ThunkDispatch } from "redux-thunk";

interface IState {
  fetching: boolean;
}

interface IProps {
  todos: ITodo[];
  fetchTodos: typeof fetchTodos;
  deleteTodo: typeof deleteTodo;
}

export class AppCls extends Component<IProps, IState> {
  state = { fetching: false };

  onButtonClick = () => {
    this.setState({
      fetching: true
    });
    this.props.fetchTodos();
  };

  componentDidUpdate = (prevProps: IProps) => {
    if (prevProps.todos.length === 0 && this.props.todos.length > 0) {
      this.setState({ fetching: false });
    }
  };

  renderList = (): JSX.Element[] => {
    return this.props.todos.map(todo => (
      <li key={todo.id} onClick={() => this.props.deleteTodo(todo.id)}>
        {todo.title}
      </li>
    ));
  };
  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch Todos</button>
        <br />
        {this.state.fetching ? (
          <h4>Loading....</h4>
        ) : (
          <ul>{this.renderList()}</ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: IStoreState) => {
  return {
    todos
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => {
  return {
    fetchTodos: () => dispatch(fetchTodos()),
    deleteTodo: (id: number) => dispatch(deleteTodo(id))
  };
};

export const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppCls);
