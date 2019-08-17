import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import cookie_session from "cookie-session";

import "./controllers/RootController";
import "./controllers/LoginController";

import { AppRouter } from "./AppRouterCls";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookie_session({
    keys: ["some_random_string_123"]
  })
);

app.use(AppRouter.getInstance());

app.listen(PORT, () => {
  console.log("server is listen to " + PORT);
});
