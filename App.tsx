import { Router } from "./src/navigation/HomeStack";
import { ThemeProvider } from "react-native-magnus";

import "expo-dev-client";

export default function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}
