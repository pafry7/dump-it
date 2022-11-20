import { TextInput, StyleSheet } from "react-native";
import { Box } from "react-native-magnus";
import Animated, { useAnimatedProps } from "react-native-reanimated";

const AnimatedText = Animated.createAnimatedComponent(TextInput);
Animated.addWhitelistedNativeProps({ text: true });

export const Label = ({
  sharedValue,
}: {
  sharedValue: Animated.SharedValue<{ label: string; confidence: number }>;
}) => {
  console.log(sharedValue.value, sharedValue, "lol");
  const textProps = useAnimatedProps(
    () => ({ text: sharedValue.value.label }),
    [sharedValue.value]
  );
  const confidenceProps = useAnimatedProps(
    () => ({ text: (sharedValue.value.confidence ?? 0 * 100).toFixed(0) }),
    [sharedValue.value]
  );

  return (
    <Box flexDir="row" alignItems="center" justifyContent="center">
      <AnimatedText
        style={styles.text}
        //@ts-expect-error native `text` prop isn't exposed in `TextInputProps`
        animatedProps={textProps}
        editable={false}
      />
      <AnimatedText
        style={styles.confidencetext}
        //@ts-expect-error native `text` prop isn't exposed in `TextInputProps`
        animatedProps={confidenceProps}
        editable={false}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    color: "black",
  },
  confidencetext: {
    fontSize: 16,
    color: "black",
  },
});
