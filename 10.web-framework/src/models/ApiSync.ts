import Axios, { AxiosPromise } from "axios";

interface IMaybeIdentifyable {
  id?: number;
}

export class ApiSync<T extends IMaybeIdentifyable> {
  constructor(private API_END_POINT: string) {}

  fetch = (id: number): AxiosPromise<T> => {
    return Axios.get(`${this.API_END_POINT}/${id}`);
  };

  save = (data: T): AxiosPromise<T> => {
    const { id } = data;
    if (id) {
      return Axios.put(`${this.API_END_POINT}/${id}`, data);
    } else {
      return Axios.post(`${this.API_END_POINT}`, data);
    }
  };
}
