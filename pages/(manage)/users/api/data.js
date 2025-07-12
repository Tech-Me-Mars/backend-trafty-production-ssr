import { request } from "@/service/AxiosService.js";

export function GetAll(payload) {
  const url = `/api/v1/management/user?limit=20&offset=0`;
  return request("get", url, {}, true);
}

export function GetById(id) {
  const url = `/api/v1/management/user/${id}`;
  return request("get", url, {}, true);
}
export function Create(payload) {
  const url = `/api/v1/management/user`;
  return request("post", url, payload, true);
}

export function Update(id, payload) {
  const url = `/api/v1/management/user/${id}`;
  return request("put", url, payload, true);
}

export function Delete(id) {
  const url = `/api/v1/management/user/${id}`;
  return request("delete", url, {}, true);
} 