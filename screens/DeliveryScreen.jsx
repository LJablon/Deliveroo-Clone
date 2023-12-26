import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { selectRestaurant } from "../features/restaurantSlice";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { XMarkIcon } from "react-native-heroicons/solid";
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const rest = useSelector(selectRestaurant);
  console.log(rest.lat);
  console.log(rest.long);
  

  return (
    <View className="flex-1 bg-[#00CCBB]">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <XMarkIcon color="white" size={50} />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order Help</Text>
        </View>
        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-4xl font-bold">45-55 Minutes</Text>
            </View>
            <Image
              source={{
                uri: "https://links.papareact.com/fls",
              }}
              className="h-20 w-20"
            />
          </View>
          <Progress.Bar size={30} color="#00CCBB" indeterminate={true} />
          <Text className="mt-3 text-gray-500">
            Preparing your order at {rest.title}!
          </Text>
        </View>
      </SafeAreaView>
      {/* <MapView
        initialRegion={{
          latitude: rest.lat,
          longitude: rest.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 z-0 mt-10"
        mapType="mutedStandard"
      >
        <Marker
            coordinate={{
                latitude: rest.lat,
                longitude: rest.long
            }}
            title={rest.title}
            description={rest.shortDescription}
            identifier="origin"
            pinColor="#00CCBB"
        />
      </MapView> */}
    </View>
  );
};

export default DeliveryScreen;
