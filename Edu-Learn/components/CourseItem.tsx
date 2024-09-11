// import { View, Text, Pressable, Image } from 'react-native'
// import React from 'react'
// import Animated, { FadeInDown } from 'react-native-reanimated';

// interface CourseItemProps{
//     course: any;
//     customStyle: string;
//     index: number;
// }

// const CourseItem = (course, customStyle, index) => {
//   return (
//       <Pressable className={"pt-4"+(customStyle ? customStyle : "")}>
//           <Animated.View
//           className="gap-2 w-full border border-gray-300 overflow-hidden rounded2xl"
//           entering = {FadeInDown.duration(100).delay(index*300).springify()}>   
//             <Image
//                 source={{
//                     uri: course.image_480*270,
//                     className:"w-full h-40"
//                 }}
//             />     
//             <Text>{course.title}</Text>
//         </Animated.View>
//     </Pressable>
//   )
// }

// export default CourseItem