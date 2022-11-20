import React from "react";
import { Dimensions } from "react-native";
import { Box, Button, Div, Icon, Text } from "react-native-magnus";

export const ShareInfo = () => {
  const { width } = Dimensions.get("window");
  return (
    <Div w={width} p={20} alignItems="center">
      <Text fontSize={24} fontWeight="500" textAlign="center">
        Share with others!
      </Text>
      <Text
        fontSize={22}
        fontWeight="500"
        textAlign="center"
        mt={20}
        color="gray"
      >
        Give it away to someone who needs it more or barter.
      </Text>
      <Box mt={50}>
        <Button
          bg="orange300"
          mt={20}
          color="orange700"
          h={60}
          onPress={() => {
            console.log("share");
          }}
          w={120}
          rounded={12}
          fontSize="xl"
          fontWeight="bold"
          suffix={
            <Icon
              ml={8}
              name="heart"
              color="orange700"
              fontSize="3xl"
              fontFamily="MaterialCommunityIcons"
            />
          }
        >
          Share
        </Button>
      </Box>
    </Div>
  );
};
