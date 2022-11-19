import { TextInput, StyleSheet } from "react-native";
import Animated, { useAnimatedProps } from "react-native-reanimated";

const AnimatedText = Animated.createAnimatedComponent(TextInput);
Animated.addWhitelistedNativeProps({ text: true });

export const Label = ({
  sharedValue,
}: {
  sharedValue: Animated.SharedValue<string>;
}) => {
  const textProps = useAnimatedProps(
    () => ({ text: sharedValue.value }),
    [sharedValue.value]
  );

  return (
    <AnimatedText
      style={styles.text}
      //@ts-expect-error native `text` prop isn't exposed in `TextInputProps`
      animatedProps={textProps}
      editable={false}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    color: "black",
  },
});
