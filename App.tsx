import { Router } from "./src/navigation/HomeStack";
import { ThemeProvider } from "react-native-magnus";

import "expo-dev-client";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
