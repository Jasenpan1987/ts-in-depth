import { User } from "./models/User";

const user = User.createUser({ id: 1 });

user.on("change", () => {
  console.log(user.get("name"));
});

user.on("save", () => {
  console.log(user);
});

user.fetch();

user.set({ name: "Tom" });

user.save();

user.get("name");
