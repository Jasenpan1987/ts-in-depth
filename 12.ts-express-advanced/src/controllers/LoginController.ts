import { Request, Response, NextFunction } from "express-serve-static-core";
import { get, controller, bodyValidator, post } from "./decorators";

@controller("/auth")
class LoginController {
  @get("/login")
  getLogin(req: Request, res: Response) {
    res.send(
      `<form method="POST">
      <div>
        <label for="email">email</label>
        <input name="email" />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" name="password" />
      </div>
      <button type="submit">Submit</button>
    </form>`
    );
  }

  @post("/login")
  @bodyValidator("email", "password")
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;
    if (email === "aaa@aaa.com" && password === "aaa") {
      req.session = {
        loggedIn: true
      };
      res.redirect("/");
    } else {
      res.send("please send the correct username and password");
    }
  }

  @get("/logout")
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect("/");
  }
}
