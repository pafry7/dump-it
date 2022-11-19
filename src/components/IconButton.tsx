import React from "react";
import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";

interface IconButtonProps {
  onPress: () => void;
  icon: JSX.Element;
  style?: StyleProp<ViewStyle>;
}

export const IconButton = ({ onPress, icon, style }: IconButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={style}>
      {icon}
    </TouchableOpacity>
  );
};
