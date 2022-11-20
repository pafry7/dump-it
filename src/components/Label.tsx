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
  const textProps = useAnimatedProps(
    () => ({ text: sharedValue.value.label }),
    [sharedValue.value]
  );
  const confidenceProps = useAnimatedProps(() => {
    const confidence = (sharedValue.value.confidence * 100).toFixed(0);
    const confidenceNumber = Number(
      (sharedValue.value.confidence * 100).toFixed(0)
    );
    return {
      text: confidence + "%",
      color:
        confidenceNumber > 90
          ? "green"
          : confidenceNumber > 80
          ? "orange"
          : "purple",
    };
  }, [sharedValue.value]);

  return (
    <Box flexDir="row" alignItems="center" justifyContent="space-between">
      <AnimatedText
        style={styles.text}
        //@ts-expect-error native `text` prop isn't exposed in `TextInputProps`
        animatedProps={textProps}
        editable={false}
      />
      <AnimatedText
        style={styles.confidenceText}
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
    fontWeight: "600",
  },
  confidenceText: {
    marginLeft: 4,
    fontSize: 16,
    color: "black",
  },
});
