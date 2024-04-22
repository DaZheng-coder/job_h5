import { View } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import { AtButton } from 'taro-ui'
import './index.scss'
import Header from "../../component/header";

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Header leftShow title='首页' />
      <text onClick={()=>{
        Taro.navigateTo({url:"/pages/page2/index"})
      }}>登陆成功</text>
    </View>
  )
}
