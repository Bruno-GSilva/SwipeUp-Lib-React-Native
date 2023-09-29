import { GestureHandlerRootView } from "react-native-gesture-handler";
import Example from "./src/example";

export default function App() {
  return (
    <GestureHandlerRootView className="flex-1">
      <Example />
    </GestureHandlerRootView>
  );
}
