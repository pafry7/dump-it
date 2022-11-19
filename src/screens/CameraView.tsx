import React, { useEffect } from "react";
import { labelImage } from "vision-camera-image-labeler";

import { useSharedValue } from "react-native-reanimated";

import {
  Camera,
  useCameraDevices,
  useFrameProcessor,
} from "react-native-vision-camera";
import { Label } from "../components/Label";
import { ResultCard } from "../components/ResultCard";
import { Button, Div, Icon } from "react-native-magnus";
import { ViewProps } from "../navigation/HomeStack";
import { Pressable, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

export function CameraView({ navigation }: ViewProps<"CameraView">) {
  const sharedVal = useSharedValue("");

  useEffect(() => {
    Camera.requestCameraPermission();
  }, []);

  const devices = useCameraDevices();
  const device = devices.back;

  const frameProcessor = useFrameProcessor(
    (frame) => {
      "worklet";
      const labels = labelImage(frame);
      sharedVal.value = labels[0]?.label;
    },
    [sharedVal]
  );

  if (device == null) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
      <Camera
        style={{ flex: 1, position: "relative" }}
        device={device}
        isActive={true}
        frameProcessor={frameProcessor}
      />
      <Div
        bg="white"
        position="absolute"
        top={40}
        right={20}
        rounded={50}
        p={10}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            navigation.navigate("CalendarView");
          }}
        >
          <Icon
            name="calendar"
            fontSize={20}
            fontFamily="Entypo"
            color="black"
          />
        </TouchableOpacity>
      </Div>
      <ResultCard>
        <Label sharedValue={sharedVal} />
        <Button
          bg="green300"
          color="green700"
          h={50}
          onPress={() => {
            navigation.navigate("ResultView", { result: sharedVal.value });
          }}
          w={140}
          rounded={12}
          fontSize="xl"
          fontWeight="bold"
          suffix={
            <Icon
              name="check"
              color="green700"
              ml="md"
              fontSize={18}
              fontFamily="FontAwesome"
            />
          }
        >
          Zatwierdź
        </Button>
      </ResultCard>
    </>
  );
}
