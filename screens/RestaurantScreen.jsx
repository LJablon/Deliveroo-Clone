import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import {
  ArrowLeftIcon,
  StarIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  ChevronRightIcon,
} from "react-native-heroicons/outline";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../features/restaurantSlice";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      shortDescription,
      dishes,
      long,
      lat,
    },
  } = useRoute();

  useEffect(() => {
    dispatch(setRestaurant({
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      shortDescription,
      dishes,
    }));
  }, [dispatch]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <BasketIcon />
      <ScrollView>
        {/* Screen Header */}
        <View className="relative">
          <Image
            source={{
              uri: urlFor(imgUrl).url(),
            }}
            className="w-full h-56 bg-gray-300 p-4"
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
          >
            <ArrowLeftIcon size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>

        {/* Restaurant Info */}
        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row space-x-1 items-center">
                <StarIcon color="green" opacity={0.5} size={22} />
                <Text className="text-gray-500 text-xs">
                  <Text className="text-green-500">{rating}</Text> {genre}
                </Text>
              </View>
              <View className="flex-row space-x-1 items-center">
                <MapPinIcon color="green" opacity={0.4} size={22} />
                <Text className="text-gray-500 text-xs">
                  Nearby * {address}
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2 pb-4">{shortDescription}</Text>
          </View>

          {/* Food Allergy */}
          <TouchableOpacity className="flex-row space-x-2 items-center p-4 border-y border-gray-300">
            <QuestionMarkCircleIcon color="grey" opacity={0.6} size={20} />
            <Text className="font-bold pl-2 flex-1 text-md">
              Have a food allergy?
            </Text>
            <ChevronRightIcon color="#00CCBB" />
          </TouchableOpacity>
        </View>

        <View className="pb-36">
          <Text className="px-4 pt-4 font-bold text-xl">Menu</Text>
          {/* Dish rows */}
          {dishes.map((dish) => (    
            <DishRow //TODO: implement card
              key={dish._id}
              id={dish._id}
              name={dish.name}
              //   watch
              description={dish.short_description}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
