import { View, Text } from 'react-native'
import React from 'react'
import { useRef } from 'react'
import Animated, {FadeInDown} from 'react-native-reanimated'
import Button from '../components/Button'
import { router } from 'expo-router'
import LottieView from 'lottie-react-native'

const Welcome = () => {
  const animation = useRef<LottieView>(null);
  return (
    <View className="bg-white gap-4 p-4 flex-1 w-full justify-center items-center">
      <Animated.View className="w-full"
      entering={FadeInDown.duration(300).springify() }>
        <LottieView
        ref={animation}
        source={require("../assets/lottie/onboarding.json")}
        autoPlay
        loop
        style={{width:"100%", height:300}}/>
        {/* <Text className="text-4xl text-center leading-[3.5rem]"
        style={{fontFamily:"BarlowExtraBold"}}>
        Discover Yourself
        </Text> */}
      </Animated.View>

      <Animated.View className="w-full"
      entering={FadeInDown.duration(300).springify() }>
        <Text className="text-4xl text-center leading-[3.5rem]"
        style={{fontFamily:"BarlowExtraBold"}}>
        Discover Yourself
        </Text>
      </Animated.View>

      <Animated.View className="w-full justify-center items-center mt-8"
      entering={FadeInDown.duration(300).delay(400).springify() }>
        <Text className="text-l text-center leading-[2rem]"
        style={{fontFamily:"BarlowSemibold", marginBottom: 36}}>
        Learn from best courses and tutorials 🚀
        </Text>
      </Animated.View>

      <Animated.View className="w-full justify-center items-center mt-8"
      entering={FadeInDown.duration(300).delay(400).springify() }>
        <Button title="Get Started" action={()=>router.push("/(tabs)")}/>
      </Animated.View>
    </View>
  )
}

export default Welcome