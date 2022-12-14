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
import { Button, Icon } from "react-native-magnus";
import { ViewProps } from "../navigation/HomeStack";
import { StatusBar } from "expo-status-bar";

const initialValue = { label: "Not found", confidence: 0 };

export function CameraView({ navigation }: ViewProps<"CameraView">) {
  const sharedVal = useSharedValue(initialValue);

  useEffect(() => {
    Camera.requestCameraPermission();
  }, []);

  const devices = useCameraDevices();
  const device = devices.back;

  const frameProcessor = useFrameProcessor(
    (frame) => {
      "worklet";
      const labels = labelImage(frame);
      sharedVal.value = labels[0] ?? initialValue;
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
      <ResultCard>
        <Label sharedValue={sharedVal} />
        <Button
          bg="orange300"
          color="orange700"
          h={50}
          onPress={() => {
            navigation.navigate("ResultView", {
              result: sharedVal.value.label,
            });
          }}
          w={140}
          rounded={12}
          fontSize="xl"
          fontWeight="bold"
          suffix={
            <Icon
              name="check"
              color="orange700"
              ml="md"
              fontSize={18}
              fontFamily="FontAwesome"
            />
          }
        >
          Confirm
        </Button>
      </ResultCard>
    </>
  );
}
