import * as SystemUI from 'expo-system-ui';

import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SwipeUpExample } from "./lib";

export default function App() {
  return (
    <GestureHandlerRootView className="flex-1">
      <SwipeUpExample/>
    </GestureHandlerRootView>
  );
}
