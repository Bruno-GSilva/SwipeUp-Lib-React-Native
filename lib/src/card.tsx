import React from "react";
import { Text, View } from "react-native";

export const Card = ({ color, text }: { color: string; text: string }) => {
    return (
        <View
            className={`w-full h-48 ${color? color: "bg-white" } justify-center items-center border-2`}
        >
            <Text className="text-4xl text-white">{text}</Text>
        </View>
    );
};
