// api接口写在这里

import { get, post } from "./api";

/**
 * 登录接口
 * @param param
 * @returns {Promise<any|undefined>}
 */
export async function login(param) {
  return post("/api/auth/login", param);
}

export async function getAreas(params) {
  return post("/terminal/api/business/getData.do?apiCode=jy000_com01", {
    typeListStr: ['aac004', 'aac011', 'aac005']
  });
}
