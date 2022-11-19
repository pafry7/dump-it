import React, { ReactNode } from "react";
import { Box } from "react-native-magnus";

interface ResultCardProps {
  children: ReactNode;
}

export const ResultCard = ({ children }: ResultCardProps) => {
  return (
    <Box
      position="absolute"
      bottom={0}
      w="100%"
      bg="white"
      h={100}
      px={32}
      py={16}
      flexDir="row"
      justifyContent="space-between"
      style={{
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
      }}
    >
      {children}
    </Box>
  );
};
