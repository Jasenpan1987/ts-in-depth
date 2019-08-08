export class Attributes<T> {
  constructor(private data: T) {}

  // string can be types
  // e.g. type nbDeveloper = "Jasen"
  // object keys are strings
  // e.g. user.name = "Jasen"
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set = (props: T): void => {
    Object.assign(this.data, props);
  };

  getAll(): T {
    return this.data;
  }
}

// type User = { firstName: string, lastName: string };
// type Post = { id: number, author: User, content: string };
// const attr = new Attributes<Post>({ id: 1, author: {firstName: "John", lastName: "Doe" }, content: "Hello world"});

// const content = attr.get("author")
