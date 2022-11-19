import React from "react";
import { Animated, Dimensions, FlatList, StyleSheet } from "react-native";
import { Button, Div, Icon, Text } from "react-native-magnus";
import { Item, items } from "../data";
import { ViewProps } from "../navigation/HomeStack";

const renderItem = ({ item, index }) => {
  return <Text color="white" fontSize={20}>{`${item}`}</Text>;
};

const TrashFooter = ({
  color,
  content,
}: {
  color: string;
  content: string;
}) => {
  return (
    <Div bg={color} flex={1} rounded={14} alignItems="center" p={20}>
      <Icon name="trash" fontFamily="Entypo" color="black" fontSize={30} />
      <Text fontSize={18} mt={20}>
        {content}
      </Text>
    </Div>
  );
};

export const ResultView = ({ route }: ViewProps<"ResultView">) => {
  console.log(route.params);
  const { width, height } = Dimensions.get("window");
  const item = items[0];
  const scroll = React.useRef<Animated.ScrollView>(null);

  const goBack = (index: number) => {
    scroll.current?.scrollTo({
      x: width * (index - 1),
      animated: true,
    });
  };

  const goForward = (index: number) => {
    scroll.current?.scrollTo({
      x: width * (index + 1),
      animated: true,
    });
  };

  const handleFinish = () => {};

  return (
    <Div h="100%" w="100%" bg="black">
      <Div mt={43} justifyContent="center" position="relative" h={32}>
        <Text variant="textInfo" color="white" textAlign="center">
          {item.name}
        </Text>
      </Div>
      <Animated.View
        style={{
          height: 0.9 * height,
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
          <Div w="100%" flexDir="row" justifyContent="flex-start">
            <Div w={width} h="100%" position="relative" p={20}>
              <FlatList
                contentContainerStyle={{
                  justifyContent: "flex-start",
                  marginTop: 20,
                }}
                data={item.tips}
                renderItem={renderItem}
              />
              <Div
                flexDir="row"
                w="100%"
                alignSelf="center"
                justifyContent="space-between"
              >
                <Button style={styles.button} w="48%" onPress={() => {}}>
                  <Text variant="bodyText" color="white">
                    Wróć
                  </Text>
                </Button>
                <Button
                  style={styles.button}
                  w="48%"
                  onPress={() => goForward(0)}
                >
                  <Text variant="bodyText" color="white">
                    Dalej
                  </Text>
                </Button>
              </Div>
            </Div>
            <Div w={width} justifyContent="flex-end" p={20}>
              <Div
                flexDir="row"
                w="100%"
                alignSelf="center"
                justifyContent="space-between"
              >
                <Button style={styles.button} w="48%" onPress={() => goBack(1)}>
                  <Text variant="bodyText" color="white">
                    Wróć
                  </Text>
                </Button>
                <Button
                  style={styles.button}
                  w="48%"
                  onPress={() => goForward(1)}
                >
                  <Text variant="bodyText" color="white">
                    Dalej
                  </Text>
                </Button>
              </Div>
            </Div>
            <Div
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
          </Div>
        </Animated.ScrollView>
      </Animated.View>
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
