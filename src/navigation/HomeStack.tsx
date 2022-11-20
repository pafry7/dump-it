import { NavigationContainer, RouteProp } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { CameraView } from "../screens/CameraView";
import { ResultView } from "../screens/ResultView";

export type HomeStackParamList = {
  CameraView: undefined;
  ResultView: { result: string };
  CalendarView: undefined;
};

export type HomeStackNavigationProp<T extends keyof HomeStackParamList> =
  NativeStackNavigationProp<HomeStackParamList, T>;

export type ViewProps<T extends keyof HomeStackParamList> = {
  navigation: HomeStackNavigationProp<T>;
  route: RouteProp<HomeStackParamList, T>;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

export function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="CameraView" component={CameraView} />
        <Stack.Screen name="ResultView" component={ResultView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
