import React, { useRef, useState } from "react";
import { Dimensions } from "react-native";
import { Box, Button, Div, Icon } from "react-native-magnus";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Header } from "../components/Header";
import { items } from "../data";
import { ViewProps } from "../navigation/HomeStack";
import Animated from "react-native-reanimated";
import { ReuseInfo } from "../components/ReuseInfo";
import { ShareInfo } from "../components/ShareInfo";
import { TrashInfo } from "../components/TrashInfo";
import { StatusBar } from "expo-status-bar";
import { ElectronicJunkView } from "../components/ElectronicJunkView";

const StepCircles = ({
  index,
  circlesAmount,
}: {
  index: number;
  circlesAmount: number;
}) => {
  return (
    <Box flexDir="row" alignItems="center">
      {Array.from({ length: circlesAmount }, (_, i) => i).map((circle) => (
        <Box
          key={circle}
          w={13}
          h={13}
          rounded={900}
          ml={circle > 0 ? 8 : undefined}
          bg={circle <= index ? "gray700" : "gray300"}
        />
      ))}
    </Box>
  );
};

export const ResultView = ({ route, navigation }: ViewProps<"ResultView">) => {
  const [index, setIndex] = useState(0);
  const { result } = route.params;
  const { width, height } = Dimensions.get("window");
  const scroll = useRef<Animated.ScrollView>(null);

  const item = items.find(
    (item) => item.id.toLowerCase() === result.toLowerCase()
  );

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

  const insets = useSafeAreaInsets();

  const maxSteps = item.type === "shareable" ? 3 : 2;
  const lastStep = index === maxSteps - 1;

  return (
    <Div h="100%" w="100%" bg="white">
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="dark" />
        <Header name={result} goBack={navigation.goBack} />
        {item.type === "electronic" ? (
          <ElectronicJunkView result={item} />
        ) : (
          <>
            <Animated.View
              style={{
                height: height - 150 - insets.top,
              }}
            >
              <Animated.ScrollView
                ref={scroll}
                horizontal
                snapToInterval={width}
                // not working properly when pressing buttons
                // fix when there is enough time
                // onScroll={(e) => {
                //   const current = Math.round(e.nativeEvent.contentOffset.x / width);
                //   console.log(current, index, e.nativeEvent.contentOffset.x);
                //   // if (current < index) {
                //   setIndex(current);
                //   // }
                // }}
                // scrollEventThrottle={100}
                // decelerationRate="fast"
                scrollEnabled={false}
                showsHorizontalScrollIndicator={false}
                bounces={false}
              >
                <Div
                  w="100%"
                  flexDir="row"
                  justifyContent="flex-start"
                  h={height - 50 - insets.top - 40} // - (header + status bar)
                >
                  {item.type === "shareable" ? (
                    <>
                      <ReuseInfo tips={item.tips} />
                      <ShareInfo />
                      <TrashInfo
                        color={item.trashColor}
                        name={item.trashName}
                      />
                    </>
                  ) : item.type === "waste" ? (
                    <>
                      <ReuseInfo tips={item.tips} />
                      <TrashInfo
                        color={item.trashColor}
                        name={item.trashName}
                      />
                    </>
                  ) : null}
                </Div>
              </Animated.ScrollView>
            </Animated.View>
            <Box
              alignSelf="center"
              w="100%"
              alignItems="center"
              h="100%"
              px={12}
            >
              <StepCircles index={index} circlesAmount={maxSteps} />
              <Box
                mt={10}
                flexDir="row"
                alignItems="center"
                justifyContent="space-between"
                w="100%"
              >
                {index > 0 ? (
                  <Button
                    bg="gray300"
                    mt={6}
                    color="gray700"
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
                        color="gray700"
                        mr="md"
                        fontSize={18}
                        fontFamily="FontAwesome"
                      />
                    }
                  >
                    Back
                  </Button>
                ) : (
                  <Box w={120} />
                )}
                {lastStep ? (
                  <Button
                    bg="orange300"
                    mt={6}
                    color="orange700"
                    h={50}
                    onPress={() => {
                      navigation.goBack();
                    }}
                    w={120}
                    rounded={12}
                    fontSize="xl"
                    fontWeight="bold"
                    alignSelf="flex-end"
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
                    Finish
                  </Button>
                ) : (
                  <Button
                    bg="gray300"
                    mt={6}
                    color="gray700"
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
                        color="gray700"
                        ml="md"
                        fontSize={18}
                        fontFamily="FontAwesome"
                      />
                    }
                  >
                    Next
                  </Button>
                )}
              </Box>
            </Box>
          </>
        )}
      </SafeAreaView>
    </Div>
  );
};
