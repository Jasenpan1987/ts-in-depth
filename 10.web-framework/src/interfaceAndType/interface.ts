import { AxiosPromise } from "axios";
import { Callback } from "./type";

export interface IAttributes<T> {
  get<K extends keyof T>(key: K): T[K];
  set(props: T): void;
  getAll(): T;
}

export interface ISync<T extends IMaybeIdentifyable> {
  fetch(id: number): AxiosPromise<T>;
  save(data: T): AxiosPromise<T>;
}

export interface IMaybeIdentifyable {
  id?: number;
}

export interface IEvents {
  on(eventName: string, callback: Callback): void;
  trigger(eventName: string): void;
}
