import "reflect-metadata";
import { MethodTypes } from "./methodTypes";
import { MetaDataKeys } from "./metadataKeys";
import { RequestHandler } from "express-serve-static-core";

interface IRouteHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}

function _routeBinder(method: MethodTypes) {
  return function(path: string) {
    return function(target: any, key: string, desc: IRouteHandlerDescriptor) {
      Reflect.defineMetadata(MetaDataKeys.path, path, target, key);
      Reflect.defineMetadata(MetaDataKeys.method, method, target, key);
    };
  };
}

export const get = _routeBinder(MethodTypes.get);
export const post = _routeBinder(MethodTypes.post);
export const put = _routeBinder(MethodTypes.put);
export const del = _routeBinder(MethodTypes.del);
export const patch = _routeBinder(MethodTypes.put);
