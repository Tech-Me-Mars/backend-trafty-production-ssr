import { request } from "@/service/AxiosService.js";

export function login(payload) {
  const url = `/api/auth/login`;
  return request("post", url, payload, true);
}

