import { putData } from '@/utils/request'

/**
 * 获取用户列表
 */
export function getUserList() {
  return fetch(`${process.env.BASE_API}/user/list`)
}

/**
 * 更新用户信息
 */
export function updateUser(user) {
  return putData(`${process.env.BASE_API}/user`, user)
}
