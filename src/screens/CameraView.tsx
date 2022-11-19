import React, { useEffect } from "react";
import { labelImage } from "vision-camera-image-labeler";
import { Text, StyleSheet } from "react-native";

import {
  Camera,
  useCameraDevices,
  useFrameProcessor,
} from "react-native-vision-camera";

export function CameraView() {
  useEffect(() => {
    Camera.requestCameraPermission();
  }, []);

  const devices = useCameraDevices();
  const device = devices.back;

  const frameProcessor = useFrameProcessor((frame) => {
    "worklet";
    const labels = labelImage(frame);
    console.log(labels);
  }, []);

  if (device == null) return <Text>loading</Text>;

  return (
    <Camera
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={true}
      frameProcessor={frameProcessor}
    />
  );
}
