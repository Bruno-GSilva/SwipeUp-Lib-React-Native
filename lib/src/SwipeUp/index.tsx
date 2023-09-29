import React, { useState } from "react";
import { Pressable, View, useWindowDimensions } from "react-native";
import Animated, {
  Easing,
  SlideInDown,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import {
  Gesture,
  GestureDetector,
} from "react-native-gesture-handler";

interface SwipeUpProps {
  children: React.ReactNode;
  borderColor?: string;
  backgroundColor?: string;
  touchIconColor?: string;
}

export default function SwipeUp(props: SwipeUpProps) {
  const { height: screenY } = useWindowDimensions();
  const [openContent, setOpenContent] = useState<boolean>(true);

  const offset = useSharedValue(screenY);
  const LIMITESCREEN = screenY - (Math.floor(screenY) - 40);

  const pan = Gesture.Pan().onChange((event) => {
    if (offset.value > LIMITESCREEN) {
      offset.value += event.changeY;
    } else {
      if (Math.sign(offset.value) === -1) {
        return (offset.value = 0);
      } else {
        offset.value += event.changeY;
      }
    }
    if (Math.sign(offset.value) === -1) {
      return (offset.value = 0);
    }
  });

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateY:
          offset.value > screenY - 40
            ? (offset.value = screenY - 40)
            : offset.value,
      },
    ],
  }));

  const onClose = () => {
    offset.value = screenY - 40;
    setOpenContent(false);
  };

  return (
    <>
      {openContent && (
        <Pressable
          className={`z-40 absolute transition-all ease-in-out bottom-0 left-0 w-screen items-center justify-center h-screen bg-[#00000060]`}
          onPress={onClose}
        />
      )}
      <GestureDetector gesture={pan}>
        <Animated.View
          entering={SlideInDown.delay(300).easing(Easing.ease)}
          onTouchStart={() => setOpenContent(true)}
          className={`absolute bottom-0 z-50 h-screen w-screen px-2 pt-4 pb-1 ease-in-out rounded-t-3xl cursor-grab items-center justify-start ${
            props.borderColor ? props.borderColor : "bg-white"
          } shadow-2xl shadow-black`}
          style={[animatedStyles]}
        >
          <View
            className={`w-24 h-2 mb-3 ${
              props.touchIconColor ? props.touchIconColor : "bg-slate-600"
            } rounded-xl`}
          />
          <View
            className={`w-full flex-1 border-2 overflow-hidden ${
              props.backgroundColor ? props.backgroundColor : "bg-white"
            }`}
          >
            {props.children}
          </View>
        </Animated.View>
      </GestureDetector>
    </>
  );
}

module.exports = {
  SwipeUp
} 