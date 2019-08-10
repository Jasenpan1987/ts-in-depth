import { User } from "./models/User";
import { UserEdit } from "./views/UserEdit";
import { UserList } from "./views/UserList";
// import { UserForm } from "./views/UserForm";

// const root = document.getElementById("content");

// const userCollection = User.createUserCollection();

// userCollection.on("change", () => {
//   new UserList(root, userCollection).render();
// });

// userCollection.fetch();

// const user = User.createUser({ name: "Jasen", age: 100 });
// const userEdit = new UserEdit(document.getElementById("content"), user);
// userEdit.render();

const root = document.getElementById("content");

const userCollection = User.createUserCollection();

userCollection.on("change", () => {
  new UserList(root, userCollection).render();
});

userCollection.fetch();
