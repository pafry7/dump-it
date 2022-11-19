import React, { useEffect, useRef, useState } from "react";

import { Camera, CameraType } from "expo-camera";
import {
  Image,
  View,
  Text,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";

import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-react-native";

import * as mobilenet from "@tensorflow-models/mobilenet";

import * as jpeg from "jpeg-js";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";

import { fetch } from "@tensorflow/tfjs-react-native";

export function CameraView() {
  const [isTfReady, setIsTfReady] = useState(false);
  const [isModelReady, setIsModelReady] = useState(false);
  const [predictions, setPredictions] = useState(null);
  const [imageToAnalyze, setImageToAnalyze] = useState(null);
  const model = useRef(null);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  useEffect(() => {
    if (!permission?.granted) {
      requestPermission();
    }
  }, [permission, requestPermission]);

  useEffect(() => {
    const initializeTfAsync = async () => {
      await tf.ready();
      setIsTfReady(true);
    };

    const initializeModelAsync = async () => {
      model.current = await mobilenet.load();
      setIsModelReady(true);
    };

    const getPermissionAsync = async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    };

    initializeTfAsync();
    initializeModelAsync();
    getPermissionAsync();
  }, []);

  const imageToTensor = (rawImageData) => {
    const { width, height, data } = jpeg.decode(rawImageData, {
      useTArray: true,
    }); // return as Uint8Array

    // Drop the alpha channel info for mobilenet
    const buffer = new Uint8Array(width * height * 3);
    let offset = 0; // offset into original data
    for (let i = 0; i < buffer.length; i += 3) {
      buffer[i] = data[offset];
      buffer[i + 1] = data[offset + 1];
      buffer[i + 2] = data[offset + 2];

      offset += 4;
    }

    return tf.tensor3d(buffer, [height, width, 3]);
  };

  const classifyImageAsync = async (source) => {
    try {
      const imageAssetPath = Image.resolveAssetSource(source);
      const response = await fetch(imageAssetPath.uri, {}, { isBinary: true });
      const rawImageData = await response.arrayBuffer();
      const imageTensor = imageToTensor(rawImageData);
      const newPredictions = await model.current.classify(imageTensor);
      setPredictions(newPredictions);
    } catch (error) {
      console.log("Exception Error: ", error);
    }
  };

  const selectImageAsync = async () => {
    try {
      let response = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
      });

      if (!response.canceled) {
        // resize image to avoid out of memory crashes
        const manipResponse = await ImageManipulator.manipulateAsync(
          response.uri,
          [{ resize: { width: 900 } }],
          { compress: 1, format: ImageManipulator.SaveFormat.JPEG }
        );

        const source = { uri: manipResponse.uri };
        setImageToAnalyze(source);
        setPredictions(null);
        await classifyImageAsync(source);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const ref = useRef<Camera>();

  const takePicture = () => {
    ref.current.takePictureAsync();
  };

  const TakePictureButton = () => {
    return (
      <View
        style={{
          position: "absolute",
          left: 0,
          bottom: 30,
          width: "100%",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={takePicture}
          style={{
            backgroundColor: "white",
            height: 50,
            width: 50,
            borderRadius: 999,
          }}
        />
      </View>
    );
  };

  return (
    <Camera style={styles.camera} type={CameraType.back} ref={ref}>
      <TakePictureButton />
    </Camera>
    // <ScrollView
    //   style={styles.container}
    //   contentContainerStyle={styles.contentContainer}
    // >
    //   <View style={styles.welcomeContainer}>
    //     <TouchableOpacity
    //       style={styles.imageWrapper}
    //       onPress={isModelReady ? selectImageAsync : undefined}
    //     >
    //       {imageToAnalyze && (
    //         <Image source={imageToAnalyze} style={styles.imageContainer} />
    //       )}

    //       {isModelReady && !imageToAnalyze && (
    //         <Text style={styles.transparentText}>Tap to choose image</Text>
    //       )}
    //     </TouchableOpacity>
    //     <View style={styles.predictionWrapper}>
    //       {isModelReady && imageToAnalyze && (
    //         <Text style={styles.text}>
    //           Predictions: {predictions ? "" : "Predicting..."}
    //         </Text>
    //       )}
    //       {isModelReady &&
    //         predictions &&
    //         predictions.length &&
    //         console.log("=== Classify image predictions: ===")}
    //       {isModelReady &&
    //         predictions &&
    //         predictions.map((p, index) => {
    //           console.log(`${index} ${p.className}: ${p.probability}`);

    //           return (
    //             <Text key={index} style={styles.text}>
    //               {p.className}: {p.probability}
    //             </Text>
    //           );
    //         })}
    //     </View>
    //   </View>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  contentContainer: {
    paddingTop: 30,
  },
  headerText: {
    marginTop: 5,
    color: "red",
    fontSize: 20,
    fontWeight: "bold",
  },
  loadingContainer: {
    marginTop: 5,
  },
  text: {
    fontSize: 16,
  },
  loadingTfContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  loadingModelContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  camera: {
    position: "relative",
    flex: 1,
  },
  imageWrapper: {
    width: 300,
    height: 300,
    borderColor: "#66c8cf",
    borderWidth: 3,
    borderStyle: "dashed",
    marginTop: 40,
    marginBottom: 10,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 280,
    height: 280,
  },
  predictionWrapper: {
    height: 100,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  transparentText: {
    opacity: 0.8,
  },
});
