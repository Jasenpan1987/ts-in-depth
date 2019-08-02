import axios, { AxiosResponse } from "axios";

const URL = "https://jsonplaceholder.typicode.com/todos/1";

interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get<ITodo>(URL).then(response => {
  const todo = response.data;
  const { id, title, completed } = todo;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    Id: ${id}
    Title: ${title}
    Finished: ${completed}
  `);
};
