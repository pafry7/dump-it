import { Router } from "./src/navigation/HomeStack";
import { ThemeProvider } from "react-native-magnus";

export default function App() {
  return (
    <ThemeProvider>
      <Router />;
    </ThemeProvider>
  );
}
