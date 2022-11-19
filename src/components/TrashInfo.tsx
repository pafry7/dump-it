import React from "react";
import { Dimensions } from "react-native";
import { Box, Button, Div, Icon, Text } from "react-native-magnus";
import { IconButton } from "./IconButton";

interface ReuseInfoProps {
  color: string;
  name: string;
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
      position="relative"
    >
      <IconButton
        style={{ position: "absolute", top: 7, right: 8 }}
        onPress={() => console.log("show info")}
        icon={
          <Box
            w={24}
            h={24}
            bg="white"
            rounded="circle"
            alignItems="center"
            justifyContent="center"
          >
            <Icon
              name="info"
              color={color}
              fontSize={18}
              fontFamily="FontAwesome"
            />
          </Box>
        }
      />
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

export const TrashInfo = ({ color, name }: ReuseInfoProps) => {
  const { width } = Dimensions.get("window");
  return (
    <Div w={width} p={20} alignItems="center">
      <Text fontSize={24} fontWeight="500" textAlign="center">
        Wyrzuć do odpowiedniego śmietnika/worka:
      </Text>
      <Box mt={50} alignItems="center" justifyContent="center">
        <TrashItem color={color} name={name} />
      </Box>
    </Div>
  );
};
