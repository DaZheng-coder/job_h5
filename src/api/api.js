import Taro from '@tarojs/taro'
import CustomConfig from "../env/env";

const BASE_URL = CustomConfig.BASE_URL;

export async function post(url, data) {
  let token = Taro.getStorageSync('token');
  try {
    const header = token?{
      'content-type': 'application/json',
      'authentication': token,
    }: {
      'content-type': 'application/json',
    }
    const res = await Taro.request({
      url: `${BASE_URL}${url}`,
      data: getMyData(data),
      header:header,
      method:"POST",
    })
    checkError(res.data)
    return res.data.data
  }catch (e) {
    failToast(e.info)
  }
}

export async function upload(url, filePath) {
  try {
    const res = await Taro.uploadFile({
      url:`${BASE_URL}${url}`,
      filePath,
      name:"file",
    })
    const data = JSON.parse(res.data)
    let { code, errMsg } = data
    if (code !== 0) {
      Taro.showToast({
        title: errMsg||'',
        icon: "none",
        duration: 2000,
      }).then()
    }
    return data.data
  }catch (e) {
    failToast(e.info)
  }
}


export async function get(url, data) {
  let token = Taro.getStorageSync('token');
  try {
    const header = token?{
      'content-type': 'application/json',
      'authentication': token,
    }: {
      'content-type': 'application/json',
    }
    const res = await Taro.request({
      url: `${BASE_URL}${url}`,
      data: getMyData(data),
      header:header,
      method:"get",
    })
    checkError(res)
    return res.data
  }catch (e) {
    failToast(e.info)
  }
}

function failToast(e) {
  if(e.code !== 0){
    Taro.showToast({
      title: e.errMsg||'',
      icon: "none",
      duration: 2000,
    })
    if (e.code === -1){
      Taro.setStorageSync("token",null)
      // Taro.setStorageSync("userInfo",null)
      // tryLogin()
    }
  }
}

function checkError(res) {
  // 剔除自动登录异常
  let {code, errMsg} = res
  if (code === -1){
    Taro.setStorageSync("token",null)
    Taro.setStorageSync("userInfo",null)
  }else if (code !== 0) {
    Taro.showToast({
      title: errMsg||'',
      icon: "none",
      duration: 2000,
    }).then()
  }
}

function checkLogin() {
  let token = Taro.getStorageSync("token")
  return !!token;
}

export function checkLoginWithToast() {
  if(!checkLogin()){
    Taro.showToast({
      title:'暂未登录，请先登录',
      icon:'none'
    })
  }
  return checkLogin()
}

function getMyData(data){
  return{
    ...data,
  }
}
