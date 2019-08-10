import { User } from "./models/User";
import { UserEdit } from "./views/UserEdit";
// import { UserForm } from "./views/UserForm";

const user = User.createUser({ name: "Jasen", age: 100 });

// const users = User.createUserCollection();
// users.fetch();
// users.on("change", () => {
//   console.log(users.collection);
// });

// const userForm = new UserForm(document.getElementById("content"), user);
// userForm.render();

const userEdit = new UserEdit(document.getElementById("content"), user);
userEdit.render();
