import { Router } from "./src/navigation/HomeStack";
import { ThemeProvider } from "react-native-magnus";

import "expo-dev-client";
import { TrashView } from "./src/screens/Trash";
import { items } from "./src/data";

export default function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}
