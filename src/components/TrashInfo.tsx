import React from "react";
import { Dimensions } from "react-native";
import { Box, Div, Text } from "react-native-magnus";

interface ReuseInfoProps {
  color: string;
}

export const TrashInfo = ({ color }: ReuseInfoProps) => {
  const { width } = Dimensions.get("window");
  return (
    <Div w={width} p={20}>
      <Text fontSize={24} fontWeight="500" textAlign="center">
        Wyrzuć do odpowiedniego śmietnika/worka:
      </Text>
      <Box mt={50}>
        <Text>{color}</Text>
      </Box>
    </Div>
  );
};
