import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeView } from "../screens/Home";

const Stack = createNativeStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeView} />
    </Stack.Navigator>
  );
}
