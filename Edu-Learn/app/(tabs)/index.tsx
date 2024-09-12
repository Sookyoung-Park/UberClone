import { View, Text, Pressable, ScrollView, Image} from "react-native";
import React, { useState } from "react";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from "expo-router";
import { FlatList } from "react-native";
import { ItemData_Soo } from "@/types/types"



interface Category{
  id:string;
  name:string;
  icon:string;
}
const categories: Category[] = [
  {id: "business", name: "Business", icon:"briefcase"},
  {id: "tech", name: "Tech", icon:"hardware-chip"},
  {id: "design", name: "Design", icon:"color-palette"},
  {id: "marketing", name: "Marketing", icon:"megaphone"},
  {id: "health", name: "Health", icon:"fitness"},
  {id: "music", name: "Music", icon:"musical-notes"},
  {id: "lifestyle", name: "Lifestyle", icon:"heart"}, 
];

export const DATA: ItemData_Soo[] = [
  {
    id:'business',
    title:'HyperGrowth MBA all in one',
    subtitle:'test subtitle1',
    image_480x270: 'string',
    is_paid:true,
    price:'400',
    num_reviews:570,
  },
  {
    id:'business',
    title:'MBA2',
    subtitle:'test subtitle2',
    image_480x270: 'string',
    is_paid:true,
    price:'200',
    num_reviews:5,
  },
  {
    id:'tech',
    title:'Tech1',
    subtitle:'test subtitle3',
    image_480x270: 'string',
    is_paid:true,
    price:'4',
    num_reviews:30,
  },
];

type ItemProps = {
  item: ItemData_Soo;
  onPress: () => void;
};



export default function HomeScreen() {

  const [selectedCategory, setSelectedCategory]=useState("business")
  const [selectHeart, setSelectHeart] = useState(false)



const Item = ({item, onPress}: ItemProps) => (
  < Animated.View className="gap-0 flex-row justify-between item-center"
    entering={FadeInDown.duration(500).delay(200).springify()}>
  <View>
    <Pressable 
      className="mr-4 p-2 rounded-full item-center flex-col gap-2"
      onPress={() => {
        onPress
      }}>
      <View 
        className=" rounded-lg flex-col border-2 border-gray-100"
      >
        <Image source={require('../../assets/images/mbatest.png')} style={{ alignSelf: 'center', width: 300, height:195, borderRadius:6 }} />
        
        <View style={{marginTop:16, marginLeft:10, marginBottom:16}}>
          <Text className="text-black text-lg"
          style={{fontFamily:"BarlowSemiBold"}}>{item.title}</Text>
          <Text className="text-gray-900 text-sm"
          style={{fontFamily:"BarlowMedium"}}>${item.price}</Text>
          <View className="gap-0 flex-row justify-between item-center">
            <Text className="text-gray-900 text-xs"
            style={{fontFamily:"BarlowMedium"}}>Review: {item.num_reviews}</Text>
            <Pressable style={{marginRight:16}} 
            onPress={() => {
              setSelectHeart(!selectHeart)
            }}>
            <Ionicons name="heart" color="red" size={20} />
            </Pressable>
          </View>
        </View>
      </View>
    </Pressable>
  </View>
  </Animated.View>  
);


  const renderItem = ({item}: {item: ItemData_Soo}) => {
    if (item.id===selectedCategory){
      return (
        <Item
          item={item}
          onPress={() => console.log(item.id)}
        />
      );
    }
  };

  const renderCategory = ({item}: {item: Category}) => (
    <Pressable 
      onPress = {() => setSelectedCategory(item.id)}
      className="mr-4 p-2 rounded-full item-center flex-col gap-4 items-center"
      style={{marginTop:2}}
      >
        <View 
        className={`p-4 rounded-full flex-col items-center ${
          selectedCategory === item.id? "border-2 border-blue-700": "border-2 border-gray-200"
        }`}>
          <Ionicons name={item.icon as any} size={24} color={selectedCategory===item.id? "#1d4ed8": "gray"}></Ionicons>
        </View>
        <Text
        style={{fontFamily: selectedCategory === item.id ? "BarlowSemiBold" :"BarlowMedium",}}>{item.name}</Text>
    </Pressable>
  );

  return (
    <>
    <View className="flex-1 bg-white">
      {/* greetings */}
      <View className="pt-16 pb-6 px-6 bg-[#2563eb]">
        <Animated.View className="flex-row justify-between item-center">
          <View>
            <View className="flex-row items-end gap-2">
              <Text className="text-white text-lg font-semibold"
              style={{fontFamily:'BarlowMedium'}}>
                Good Morning 👋
              </Text>
            </View>
            <Text className="text-white text-xl font-bold"
              style={{fontFamily:'BarlowSemibold'}}>
                Sookyoung Park
              </Text>
          </View>
          
          <View>
            <MaterialCommunityIcons
              name="bell-badge-outline"
              size={30}
              color="white"/>
          </View>
        </Animated.View>

        {/* Search bar */}
        <View>
          <Pressable onPress={()=>router.push("/explore")}>
            <View className="flex-row item-center bg-white/20 rounded-2xl p-4 mt-4">
              <MaterialCommunityIcons
              name="magnify"
              size={20}
              color="white"/>
              <Text className="text-white ml-2"
              style={{fontFamily:"BarlowRegular", marginLeft:12}}>What do you want to learn today?</Text>
            </View>
          </Pressable>
        </View>
      </View>
      
      {/* Explore topics */}
      <ScrollView className="flex-1 bg-white gap-4">
        <Animated.View className="gap-0"
        entering={FadeInDown.duration(500).delay(200).springify()}>
          <View className="flex-row justify-between px-6 pt-4  items-center">
            <Text className="text-lg"
            style={{fontFamily:'BarlowSemiBold'}}>Explore Topics</Text>

            <Text className="text-blue-700"
            style={{fontFamily:'BarlowSemiBold'}}>See More</Text>

          </View>

          {/* categories List */}
          <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mb-4 pl-4">
          {
            categories.map((category) => {
              return (
                <View key={category.id}>
                  {renderCategory({ item: category })}
                </View>
              );
            })
          }
          </ScrollView>
          <View></View>  
        </Animated.View>

        {/* Category Courses */}
        <View >
          <FlatList 
            horizontal={true}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            extraData={selectedCategory}
            showsHorizontalScrollIndicator={false}
          />  
        </View>        
      </ScrollView>

    </View>
    </>
  );
}
