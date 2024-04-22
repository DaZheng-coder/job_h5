import { View } from '@tarojs/components'
import { AtNavBar } from 'taro-ui'
import Taro from "@tarojs/taro";
import './index.scss'

export default function Header({title,leftShow}) {



  return (
    <View className='header'>
      <AtNavBar
        onClickLeftIcon={()=>{
          if (leftShow){
            Taro.navigateBack({delta:1}).then()
          }
        }}
        color='#000'
        title={title}
        leftIconType={leftShow?'chevron-left':''}
      />
    </View>
  )
}
