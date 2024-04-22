
// api接口写在这里


import {post} from "./api";

/**
 * 登录接口
 * @param param
 * @returns {Promise<any|undefined>}
 */
export async function login(param) {
  return post("/api/auth/login",param)
}



