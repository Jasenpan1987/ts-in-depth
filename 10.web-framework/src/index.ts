import { User } from "./models/User";

const user = new User({ id: 1 });

user.on("change", () => {
  console.log(user.get("name"));
});

user.on("save", () => {
  console.log(user);
});

user.fetch();

user.set({ name: "Jim" });

user.save();
