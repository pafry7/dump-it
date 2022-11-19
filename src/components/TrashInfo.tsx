import React from "react";
import { Dimensions } from "react-native";
import { Box, Div, Icon, Text } from "react-native-magnus";

interface ReuseInfoProps {
  color: string;
}

const TrashItem = ({ color, name }: { color: string; name: string }) => {
  return (
    <Box
      w={200}
      h={200}
      rounded={16}
      bg={color}
      alignItems="center"
      justifyContent="center"
    >
      <Icon
        name="recycle"
        color="white"
        fontSize={50}
        fontFamily="MaterialCommunityIcons"
      />
      <Text fontSize={32} color="white" mt={12} fontWeight="500">
        {name}
      </Text>
    </Box>
  );
};

export const TrashInfo = ({ color }: ReuseInfoProps) => {
  const { width } = Dimensions.get("window");
  return (
    <Div w={width} p={20} alignItems="center">
      <Text fontSize={24} fontWeight="500" textAlign="center">
        Wyrzuć do odpowiedniego śmietnika/worka:
      </Text>
      <Box mt={50}>
        <TrashItem color={color} name="Szkło" />
      </Box>
    </Div>
  );
};
