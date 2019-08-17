import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import { MetaDataKeys } from "./metadataKeys";
import { RequestHandler } from "express-serve-static-core";

export function use(middleware: RequestHandler) {
  return function(target: any, key: string, desc: PropertyDescriptor) {
    const middlewares =
      Reflect.getMetadata(MetaDataKeys.middleware, target, key) || [];

    middlewares.push(middleware);

    Reflect.defineMetadata(MetaDataKeys.middleware, middlewares, target, key);
  };
}
