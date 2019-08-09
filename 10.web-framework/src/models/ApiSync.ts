import axios, { AxiosPromise } from "axios";

interface IMaybeIdentifyable {
  id?: number;
}

export class ApiSync<T extends IMaybeIdentifyable> {
  constructor(private API_END_POINT: string) {}

  fetch = (id: number): AxiosPromise<T> => {
    return axios.get(`${this.API_END_POINT}/${id}`);
  };

  save = (data: T): AxiosPromise<T> => {
    const { id } = data;
    if (id) {
      return axios.put(`${this.API_END_POINT}/${id}`, data);
    } else {
      return axios.post(`${this.API_END_POINT}`, data);
    }
  };
}
