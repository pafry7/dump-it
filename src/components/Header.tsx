import { Div, Icon, Text } from "react-native-magnus";
import { IconButton } from "./IconButton";

export const Header = ({
  name,
  goBack,
}: {
  name: string;
  goBack: () => void;
}) => {
  return (
    <Div
      position="relative"
      h={50}
      flexDir="row"
      alignItems="center"
      justifyContent="center"
    >
      <IconButton
        onPress={goBack}
        style={{ position: "absolute", left: 12, top: 10 }}
        icon={
          <Icon
            name="arrow-back"
            color="black"
            fontSize="6xl"
            fontFamily="Ionicons"
          />
        }
      />
      <Text fontSize={32} fontWeight="bold">
        {name}
      </Text>
    </Div>
  );
};
