import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import Animated, { FadeInDown } from 'react-native-reanimated';
import {useWislistStore} from '../store/wishlistStore'
import { Ionicons } from '@expo/vector-icons';

interface CourseItemProps{
    course: any;
    customStyle: string;
    index: number;
} 


const CourseItem:React.FC<CourseItemProps> = ({
    course, 
    customStyle, 
    index
}) => {
    const {addToWishList, removeFromWishList, isInWishList} = useWislistStore();

    const isWishListed = isInWishList(course.title)

    const toggleWishlist =() =>{
        if(isWishListed){
            removeFromWishList(course.title);
        }
        else{
            addToWishList(course)
        }
    };

    return (
        <Pressable className={"pt-4"+(customStyle ? customStyle : "")}>
            <Animated.View
            className="gap-2 w-full border border-gray-300 overflow-hidden rounded2xl"
            entering = {FadeInDown.duration(100).delay(index*300).springify()}>   
                <Image
                    source={{
                        uri: course.image_480*270,
                    }}
                    className="w-full h-40"
                />
                <View className='px-4 p-2'>
                    <Text
                    className='text-red-600'
                    style={{fontFamily:"BarlowBold"}}></Text>
                    {course.title}
                </View>

                <View className="flex-row items-center pt-2 pb-4 justify-between">
                    <Text>$ {course.is_paid}</Text>
                    <Pressable onPress={toggleWishlist}>
                        <Ionicons color={isWishListed? "red":"gray"} name={isWishListed?"heart":"heart-outline"} size={20} />
                    </Pressable>

                </View>
            </Animated.View>
        </Pressable>
    )
}

export default CourseItem