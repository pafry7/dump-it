import React from "react";
import { TouchableOpacity } from "react-native";

interface IconButtonProps {
  onPress: () => void;
  icon: JSX.Element;
}

export const IconButton = ({ onPress, icon }: IconButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      {icon}
    </TouchableOpacity>
  );
};
