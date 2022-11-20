import React, { useCallback, useMemo, useRef } from "react";
import { Dimensions } from "react-native";
import { Box, Button, Div, Icon, Text } from "react-native-magnus";
import { IconButton } from "./IconButton";

import {
  BottomSheetModal,
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { trashInfo } from "../data";

interface ReuseInfoProps {
  color: string;
  name: string;
}

const TrashItem = ({
  color,
  name,
  onPress,
}: {
  color: string;
  name: string;
  onPress: () => void;
}) => {
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
        onPress={onPress}
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
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const bottomSheetDatesRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ["50%"], []);
  const snapPointsDates = useMemo(() => ["25%"], []);

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    []
  );

  const trashData = trashInfo.find((trash) => trash.trashName === name);

  return (
    <Div w={width} p={20} alignItems="center">
      <Text fontSize={24} fontWeight="500" textAlign="center">
        Wyrzuć do odpowiedniego śmietnika/worka
      </Text>
      <Box mt={50} alignItems="center" justifyContent="center">
        <TrashItem
          color={color}
          name={name}
          onPress={() => {
            bottomSheetRef.current.present();
          }}
        />
      </Box>
      <Box
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
        w="100%"
        mt={24}
      >
        <Box>
          <Text fontSize={18} fontWeight="600">
            Next garbage disposal
          </Text>
          <Text fontSize={18} fontWeight="400">
            22.11.2022
          </Text>
        </Box>
        <Button
          bg="gray300"
          color="gray700"
          mt={6} // it doesnt align with parent ;)))
          h={50}
          onPress={() => {
            bottomSheetDatesRef.current.present();
          }}
          w={100}
          rounded={12}
          fontSize="xl"
          fontWeight="bold"
        >
          More
        </Button>
      </Box>
      <BottomSheetModal
        index={0}
        ref={bottomSheetDatesRef}
        snapPoints={snapPointsDates}
        backdropComponent={renderBackdrop}
      >
        <Box p={16}>
          <Text fontSize={30} fontWeight="500">
            Kolejne daty
          </Text>
          {["27.11.2022", "02.12.2022", "15.12.2022"].map((item) => (
            <Text fontSize={14}>- {item}</Text>
          ))}
        </Box>
      </BottomSheetModal>
      <BottomSheetModal
        index={0}
        ref={bottomSheetRef}
        enablePanDownToClose={false}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
      >
        <BottomSheetScrollView style={{ padding: 16 }}>
          <Text fontSize={30} fontWeight="500">
            {name}
          </Text>
          <Box mt={8}>
            <Text fontSize={18}>Co wyrzucać?</Text>
            {trashData.shouldBeDumped.map((item) => (
              <Text key={item} fontSize={14}>
                - {item}
              </Text>
            ))}
          </Box>
          <Box mt={8} mb={50}>
            <Text fontSize={18}>Czego nie wyrzucać?</Text>
            {trashData.shouldNotBeDumped.map((item) => (
              <Text key={item} fontSize={14}>
                - {item}
              </Text>
            ))}
          </Box>
        </BottomSheetScrollView>
      </BottomSheetModal>
    </Div>
  );
};
