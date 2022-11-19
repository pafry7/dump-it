import React from "react";
import { Dimensions } from "react-native";
import { Box, Button, Div, Text } from "react-native-magnus";

interface ReuseInfoProps {}

export const ShareInfo = ({}: ReuseInfoProps) => {
  const { width } = Dimensions.get("window");
  return (
    <Div w={width} p={20} alignItems="center">
      <Text fontSize={24} fontWeight="500" textAlign="center">
        Daj znać innym!
      </Text>
      <Text fontSize={20} fontWeight="500" textAlign="center" mt={20}>
        Oddaj komuś kto tego bardziej potrzebuje lub wymień się.
      </Text>
      <Box mt={50}>
        <Button
          bg="blue300"
          mt={20}
          color="blue700"
          h={60}
          onPress={() => {
            console.log("share");
          }}
          w={140}
          rounded={12}
          fontSize="xl"
          fontWeight="bold"
        >
          Podziel się
        </Button>
      </Box>
    </Div>
  );
};
