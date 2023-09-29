import React from "react";

import { Text, TouchableOpacity, View } from "react-native";
import SwipeUp from "../SwipeUp";
import { Card } from "../card";

export default function Example(): React.JSX.Element {
  return (
    <View className="flex-1 p-4 bg-purple-500">
      <TouchableOpacity className="w-48 h-48 bg-emerald-500" />
      {/* <!-- This is an example of a swipeable card component --> */}
      <SwipeUp
        borderColor="bg-white"
        backgroundColor="bg-black"
        touchIconColor="bg-black"
      >
        <Text className="text-white font-semibold text-center my-2 text-2xl">
          example
        </Text>
        <Card color="bg-red-500" text="1" />
        <Card color="bg-sky-500" text="2" />
        <Card color="bg-purple-500" text="3" />
        <Card color="bg-amber-500" text="4" />
      </SwipeUp>
    </View>
  );
}

module.exports = {
  Example,
};
