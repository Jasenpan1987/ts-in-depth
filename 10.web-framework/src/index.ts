import { User } from "./models/User";

// const user = User.createUser({ name: "Jasen", age: 100 });
// user.save();

const users = User.createUserCollection();
users.fetch();
users.on("change", () => {
  console.log(users.collection);
});
