import { User } from "./models/User";

const user = new User({ id: 1 });
user.fetch();
console.log(user);

user.set({ age: 1999 });
user.set({ name: "NEW NAME" });
user.save();
console.log(user);

const user2 = new User({ name: "Billy", age: 1 });
user2.save();
// import axios from "axios";

// axios.post("http://localhost:3000/users", {
//   name: "Jasen",
//   age: 10
// });

// axios.get("http://localhost:3000/users/1").then(console.log);

// axios.put("http://localhost:3000/users/1", {
//   name: "John Doe",
//   age: 10
// });

// axios.delete("http://localhost:3000/users/1");
