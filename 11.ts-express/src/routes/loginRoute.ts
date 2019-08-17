import { Router, Request, Response, NextFunction } from "express";

const router = Router();

interface IRequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  if (req.session && req.session.loggedIn) {
    next();
  } else {
    res.redirect("/login");
  }
};

router.get("/", (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
      <div>
        <div>You are logged in</div>
        <a href="/logout">Log out</a>
      </div>
    `);
  } else {
    res.send(`
    <div>
      <div>You are NOT logged in</div>
      <a href="/login">Log in</a>
    </div>
  `);
  }
});

router.get("/logout", (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect("/");
});

router.get("/login", (req: Request, res: Response) => {
  res.send(`
    <form method="POST">
      <div>
        <label for="email">email</label>
        <input name="email" />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" name="password" />
      </div>
      <button type="submit">Submit</button>
    </form>
  `);
});

router.post("/login", (req: IRequestWithBody, res: Response) => {
  const { email, password } = req.body;
  if (email && password && email === "aaa@aaa.com" && password === "aaa") {
    req.session = {
      loggedIn: true
    };
    res.redirect("/");
  } else {
    res.send("please send the correct username and password");
  }
});

router.get("/protected", requireAuth, (req: Request, res: Response) => {
  res.send(`
    <div>
      This is a protected route.
    </div>
  `);
});

export { router };
