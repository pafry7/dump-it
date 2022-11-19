import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList } from "react-native";
import { Div, Text } from "react-native-magnus";
import { Header } from "../components/Header";
import { calendarData, CallendarItem } from "../data";
import { ViewProps } from "../navigation/HomeStack";

const renderItem = ({
  item: { name, days },
}: {
  item: CallendarItem;
  index: number;
}) => {
  return (
    <Div shadow="sm" alignItems="flex-start" bg="#F5F5F5" p={10} rounded={14}>
      <Text fontSize={20} w="100%">
        {name}
      </Text>
      <Text mt={10} color="gray" fontSize={15}>
        {`Data odbioru: ${days}`}
      </Text>
    </Div>
  );
};

export const CalendarView = ({ navigation }: ViewProps<"CameraView">) => {
  return (
    <Div h="100%" w="100%" bg="white">
      <StatusBar style="dark" />
      <Header name="Wywozy" goBack={navigation.goBack} />
      <FlatList
        contentContainerStyle={{
          padding: 20,
          justifyContent: "space-around",
          height: "100%",
        }}
        data={calendarData}
        renderItem={renderItem}
      />
    </Div>
  );
};
