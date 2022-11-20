import React from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import { Box, Div, DivProps, Icon, Text } from "react-native-magnus";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { FadeInUp } from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import { Item } from "../data";

import * as Linking from "expo-linking";

const TipItem = ({ tip }: { tip: string }) => {
  return (
    <Animated.View
      entering={FadeInUp.duration(300)}
      style={{ marginBottom: 20 }}
    >
      <Text fontSize={24} fontWeight="500" textAlign="center">
        {tip}
      </Text>
    </Animated.View>
  );
};

interface ReuseInfoProps {
  tips: string[];
}

export const ReuseInfo = ({ tips }: ReuseInfoProps) => {
  const { width } = Dimensions.get("window");
  return (
    <Div w={width} p={20}>
      <Text fontSize={24} fontWeight="500" textAlign="center">
        Użyj w inny sposób!
      </Text>
      <Box mt={50}>
        {tips.map((tip, index) => (
          <TipItem tip={tip} key={index} />
        ))}
      </Box>
    </Div>
  );
};

const LinkText = ({
  text,
  link,
  ...rest
}: { text: string; link: string } & DivProps) => {
  return (
    <Box w="100%" {...rest}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        onPress={() => {
          Linking.openURL(link);
        }}
      >
        <Text w="80%" fontSize={18}>
          {text}
        </Text>
        <Icon
          name="arrow-right"
          color="indigo700"
          fontSize={18}
          fontFamily="FontAwesome"
        />
      </TouchableOpacity>
    </Box>
  );
};

export const ElectronicJunkView = ({ result }: { result: Item }) => {
  return (
    <Div h="100%" w="100%" bg="white">
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="dark" />
        <Div p={20}>
          <Text fontSize={24} fontWeight="500" textAlign="center">
            Co zrobić z elektroniką?
          </Text>
          <Box mt={50}>
            <LinkText
              text="Odnieś zużyty sprzęt do punktu zbierania"
              link="https://www.moje-miasto-bez-elektrosmieci.pl/mapa-eko-dzialan-placowek-oswiatowych/"
            />
            <LinkText
              mt={32}
              text="Przekaż telefon do recyclingu"
              link="https://orangerecykling.pl/wycen"
            />
            <LinkText
              mt={32}
              text="Zamów elektrobygade"
              link="https://mpo.krakow.pl/pl/mieszkancy/uslugi/elektrobrygada"
            />
          </Box>
        </Div>
      </SafeAreaView>
    </Div>
  );
};
