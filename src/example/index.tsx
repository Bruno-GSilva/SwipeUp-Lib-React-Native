import { Text, TouchableOpacity, View } from "react-native";
import SwipeUp from "../SwipeUp";
import { Card } from "../card";

export default function Example() {
    return (
        <View className="flex-1 p-4 bg-purple-500">
            <TouchableOpacity className="w-48 h-48 bg-emerald-500"/>
            {/* <!-- This is an example of a swipeable card component --> */}
            <SwipeUp
                borderColor="bg-white"
                backgroundColor="bg-black"
                touchIconColor="bg-black"
            >
                <Text className="text-white font-semibold text-center my-2 text-2xl">
                    example
                </Text>
                <Card color="red" text="1" />
                <Card color="sky" text="2" />
                <Card color="purple" text="3" />
                <Card color="amber" text="4" />
            </SwipeUp>
        </View>
    );
}
