import "reflect-metadata";
import { Request, RequestHandler, Response, NextFunction } from "express";
import { AppRouter } from "../../AppRouterCls";
import { MethodTypes } from "./methodTypes";
import { MetaDataKeys } from "./metadataKeys";

function bodyValidators(keys: string[]): RequestHandler {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.body) {
      res.status(422).send("Invalid Request");
      return;
    }

    for (let key of keys) {
      if (!req.body[key]) {
        res.status(422).send(`Missing ${key} on request body`);
        return;
      }
    }

    next();
  };
}

export function controller(routePrefix: string) {
  return function(target: Function) {
    const router = AppRouter.getInstance();
    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata(
        MetaDataKeys.path,
        target.prototype,
        key
      );
      const method: MethodTypes = Reflect.getMetadata(
        MetaDataKeys.method,
        target.prototype,
        key
      );

      const middlewares =
        Reflect.getMetadata(MetaDataKeys.middleware, target.prototype, key) ||
        [];

      const requiredBodyProps =
        Reflect.getMetadata(MetaDataKeys.validator, target.prototype, key) ||
        [];

      const validator = bodyValidators(requiredBodyProps);

      if (path) {
        router[method](
          `${routePrefix}${path}`,
          ...middlewares,
          validator,
          routeHandler
        );
      }
    }
  };
}
