import React, { useRef, useState } from "react";
import { Dimensions, StyleSheet } from "react-native";
import { Box, Button, Div, Icon, Text } from "react-native-magnus";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Header } from "../components/Header";
import { Item, items } from "../data";
import { ViewProps } from "../navigation/HomeStack";
import Animated from "react-native-reanimated";
import { ReuseInfo } from "../components/ReuseInfo";
import { ShareInfo } from "../components/ShareInfo";
import { TrashInfo } from "../components/TrashInfo";

const StepCircles = ({ index }: { index: number }) => {
  return (
    <Box flexDir="row" alignItems="center">
      {[0, 1, 2].map((circle) => (
        <Box
          w={13}
          h={13}
          rounded={900}
          ml={circle > 0 ? 4 : undefined}
          bg={circle <= index ? "orange700" : "orange300"}
        />
      ))}
    </Box>
  );
};

export const ResultView = ({ route, navigation }: ViewProps<"ResultView">) => {
  const [index, setIndex] = useState(0);
  const { result } = route.params;
  const { width, height } = Dimensions.get("window");
  const item = items[0];
  const scroll = useRef<Animated.ScrollView>(null);

  const goBack = (index: number) => {
    scroll.current?.scrollTo({
      x: width * (index - 1),
      animated: true,
    });
    setIndex(index - 1);
  };

  const goForward = (index: number) => {
    scroll.current?.scrollTo({
      x: width * (index + 1),
      animated: true,
    });
    setIndex(index + 1);
  };

  const handleFinish = () => {};

  const insets = useSafeAreaInsets();

  return (
    <Div h="100%" w="100%" bg="white">
      <SafeAreaView style={{ flex: 1 }}>
        <Header name={result} goBack={navigation.goBack} />
        <Animated.View
          style={{
            height: height - 150 - insets.top,
          }}
        >
          <Animated.ScrollView
            ref={scroll}
            horizontal
            snapToInterval={width}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={false}
            bounces={false}
          >
            <Div
              w="100%"
              flexDir="row"
              justifyContent="flex-start"
              h={height - 50 - insets.top - 40} // - (header + status bar)
            >
              <ReuseInfo tips={item.tips} />
              <ShareInfo />
              <TrashInfo color="blue" />
            </Div>
            {/* <Div
            w={width}
            justifyContent="space-between"
            alignItems="center"
            p={20}
          >
            <Icon
              mt={100}
              name="trash"
              fontFamily="Entypo"
              color={item.trashColor}
              fontSize={300}
            />
            <Button style={styles.button} onPress={() => goBack(2)}>
              <Text variant="bodyText" color="white">
                Wróć
              </Text>
            </Button>
          </Div>
        </Div> */}
          </Animated.ScrollView>
        </Animated.View>
        <Box alignSelf="center" w="100%" alignItems="center" h="100%" px={12}>
          <StepCircles index={index} />
          <Box
            mt={10}
            flexDir="row"
            alignItems="center"
            justifyContent="space-between"
            w="100%"
          >
            <Button
              bg="orange300"
              mt={6}
              color="orange700"
              h={50}
              onPress={() => {
                goBack(index);
              }}
              w={120}
              rounded={12}
              fontSize="xl"
              fontWeight="bold"
              alignSelf="flex-end"
              prefix={
                <Icon
                  name="arrow-left"
                  color="orange700"
                  mr="md"
                  fontSize={18}
                  fontFamily="FontAwesome"
                />
              }
            >
              Wstecz
            </Button>
            <Button
              bg="orange300"
              mt={6}
              color="orange700"
              h={50}
              onPress={() => {
                goForward(index);
              }}
              w={120}
              rounded={12}
              fontSize="xl"
              fontWeight="bold"
              alignSelf="flex-end"
              suffix={
                <Icon
                  name="arrow-right"
                  color="orange700"
                  ml="md"
                  fontSize={18}
                  fontFamily="FontAwesome"
                />
              }
            >
              Dalej
            </Button>
          </Box>
        </Box>
      </SafeAreaView>
    </Div>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    padding: 10,
    alignSelf: "center",
  },
});
