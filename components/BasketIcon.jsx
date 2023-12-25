import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import Currency from "react-currency-formatter";

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);

  if (items.length === 0) return null;

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity onPress={() => navigation.navigate("Basket")}className="flex-row items-center mx-5 justify-between p-4 bg-[#00CCBB] rounded-lg">
        <Text className="text-white font-extrabold text-lg">{items.length}</Text>
        <Text className="text-white font-bold text-lg">View Basket</Text>
        <Text className="text-white font-extrabold text-lg">
          <Currency  quantity={basketTotal} currency="USD" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
