// api/business.js
import { request } from '@/service/AxiosService'

export function GetAll() {
  const url = `/api/v1/management/business`
  return request('get', url, {}, true)
}

export function Create(payload) {
  const url = `/api/v1/management/role`
  return request('post', url, payload, true)
}

export function GetById(id) {
  const url = `/api/v1/management/role/${id}`
  return request('get', url, {}, true)
}



export function Update(id, payload) {
  const url = `/api/v1/management/role/${id}`
  return request('put', url, payload, true)
}

export function Delete(id) {
  const url = `/api/v1/management/role/${id}`
  return request('delete', url, {}, true)
}
