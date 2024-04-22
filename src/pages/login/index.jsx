import { View } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import { AtButton ,AtForm ,AtInput } from 'taro-ui'
import {useState} from "react";
import './index.scss'
import Header from "../../component/header";
import {login} from "../../api/apis";

export default function Index() {
  const [username, setUsername] = useState()
  const [pwd, setPwd] = useState()


  useLoad(() => {
  })

  const onSubmit = () => {
    Taro.showModal({
      title: '提示',
      content: '是否确认登陆',
      success: function (res) {
        if (res.confirm) {
          // 登陆逻辑
          Taro.showLoading()
          login({
            userName:username
            ,pwd
          }).then((res)=>{
            if (res){
              Taro.navigateTo({url:"/pages/home/index"})
            }
          }).finally(()=>{
            Taro.hideLoading()
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })

  }

  const onReset = (event) => {
    console.log("onReset event",event)

  }

  return (
    <View className='login-page'>
      <Header title='登陆' />
      <AtForm
        onSubmit={onSubmit}
        onReset={onReset}
      >
        <AtInput
          name='username'
          title='用户名'
          type='text'
          placeholder='请输入用户名'
          value={username}
          onChange={(val)=>{setUsername(val)}}
        />
        <AtInput
          name='pwd'
          title='密码'
          type='password'
          placeholder='密码不能少于6位数'
          value={pwd}
          onChange={(val)=>{setPwd(val)}}
        />
        <View className='login-btn-box'>
          <AtButton type='primary' formType='submit'>提交</AtButton>
        </View>
        <View className='login-btn-box'>
          <AtButton formType='reset'>重置</AtButton>
        </View>
      </AtForm>
    </View>
  )
}
