import { View } from "./View";
import { User, UserProps } from "../models/User";
import { UserForm } from "./UserForm";
import { UserShow } from "./UserShow";

export class UserEdit extends View<User, UserProps> {
  template = () => `
    <div>
      <div class="user-show"></div>
      <div class="user-form"></div>
    </div>
  `;

  regionsMap = () => {
    return {
      userShow: ".user-show",
      userForm: ".user-form"
    };
  };

  onRender = () => {
    new UserShow(this.regions.userShow, this.model).render();
    new UserForm(this.regions.userForm, this.model).render();
  };
}
