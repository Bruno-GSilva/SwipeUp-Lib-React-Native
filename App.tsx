import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDecay,
} from "react-native-reanimated";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

const SIZE = 1000;

export default function App() {
  const offset = useSharedValue(0);
  const width = useSharedValue(0);

  const onLayout = (event: { nativeEvent: { layout: { width: number } } }) => {
    width.value = event.nativeEvent.layout.width;
  };

  const pan = Gesture.Pan()
    .onChange((event) => {
      offset.value += event.changeY;
      console.log(event.changeY);
    })
    .onFinalize((event) => {
      offset.value = withDecay({
        velocity: event.velocityY,
        rubberBandEffect: true,
        clamp: [-(width.value / 2) + SIZE / 2, width.value / 2 - SIZE / 2],
      });
    });

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: offset.value }],
  }));

  useEffect(() => {
    console.log(offset.value);
  }, []);

  return (
    <GestureHandlerRootView className="flex-1 items-center justify-center h-full bg-slate-500">
      <View
        onLayout={onLayout}
        className="flex-1 w-full items-center justify-end"
      >
        <GestureDetector gesture={pan}>
          <Animated.View
            className={`h-3/4 w-full rounded-t-3xl cursor-grab items-center justify-start py-4 bg-white shadow-2xl shadow-black`}
            style={[animatedStyles]}
          >
            <View className="w-24 h-2 bg-slate-600 rounded-xl" />
          </Animated.View>
        </GestureDetector>
      </View>
    </GestureHandlerRootView>
  );
}
