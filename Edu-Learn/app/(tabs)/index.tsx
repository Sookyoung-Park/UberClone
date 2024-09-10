import { View, Text, Pressable, ScrollView } from "react-native";
import React, { useState } from "react";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from "expo-router";

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

export default function HomeScreen() {

  const [selectedCategory, setSelectedCategory]=useState("Business")

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
          <View className="flex-row justify-between px-6 pt- 4  items-center">
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
          

        </Animated.View>

      </ScrollView>
      
      
    </View>
    </>
  );
}
