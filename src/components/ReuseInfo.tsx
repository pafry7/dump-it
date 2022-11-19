import React from "react";
import { Dimensions } from "react-native";
import { Box, Div, Text } from "react-native-magnus";
import Animated, { FadeInUp } from "react-native-reanimated";

const TipItem = ({ tip }: { tip: string }) => {
  return (
    <Animated.View style={{ height: 50 }} entering={FadeInUp.duration(300)}>
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
