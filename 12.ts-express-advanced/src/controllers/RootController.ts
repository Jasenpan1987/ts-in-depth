import { Request, Response, NextFunction } from "express";
import { controller } from "./decorators";
import { get, use } from "./decorators";

const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  if (req.session && req.session.loggedIn) {
    next();
  } else {
    res.redirect("/auth/login");
  }
};

@controller("")
class RootController {
  @get("/")
  getRoot(req: Request, res: Response) {
    if (req.session && req.session.loggedIn) {
      res.send(`
      <div>
        <div>You are logged in</div>
        <a href="/auth/logout">Log out</a>
      </div>
    `);
    } else {
      res.send(`
    <div>
      <div>You are NOT logged in</div>
      <a href="/auth/login">Log in</a>
    </div>
  `);
    }
  }

  @get("/protected")
  @use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send(`
    <div>
      This is a protected route.
    </div>
  `);
  }
}
