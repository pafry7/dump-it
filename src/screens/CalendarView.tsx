import React from "react";
import { Div } from "react-native-magnus";
import { Header } from "../components/Header";
import { ViewProps } from "../navigation/HomeStack";

export const CalendarView = ({ navigation }: ViewProps<"CameraView">) => {
  return (
    <Div h="100%" w="100%" bg="white">
      <Header name="Kalendarz" goBack={navigation.goBack} />
    </Div>
  );
};
