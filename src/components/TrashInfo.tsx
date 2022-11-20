import React, { useCallback, useMemo, useRef } from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import { Box, Button, Div, Icon, Text } from "react-native-magnus";
import { IconButton } from "./IconButton";
import { formatDistanceToNow, format } from "date-fns";

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
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <Box
        w={200}
        h={200}
        rounded={16}
        bg={color}
        alignItems="center"
        justifyContent="center"
        position="relative"
      >
        <Box
          position="absolute"
          top={10}
          right={10}
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
    </TouchableOpacity>
  );
};

const DateItem = ({ date }: { date: string }) => {
  return (
    <Box flexDir="row" alignItems="center" mr={24} mt={12}>
      <Icon
        name="calendar"
        color="black"
        fontFamily="MaterialCommunityIcons"
        fontSize="4xl"
      />
      <Box ml={4}>
        <Text fontWeight="500" fontSize={16}>
          {format(new Date(date), "dd.MM.yyyy")}
        </Text>
        <Text color="gray">{formatDistanceToNow(new Date(date))}</Text>
      </Box>
    </Box>
  );
};

export const TrashInfo = ({ color, name }: ReuseInfoProps) => {
  const { width } = Dimensions.get("window");
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const bottomSheetDatesRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ["50%"], []);
  const snapPointsDates = useMemo(() => ["30%"], []);

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
        Dispose of in the appropriate trash/garbage bag
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
            {format(new Date(trashData.disposals[0]), "dd.MM.yyyy")}
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
        <Box py={8} px={16}>
          <Text fontSize={28} fontWeight="500">
            Next garbage disposals
          </Text>
          <Box flexDir="row" alignItems="center" flexWrap="wrap" mt={8}>
            {trashData.disposals.map((date) => (
              <DateItem key={date} date={date} />
            ))}
          </Box>
        </Box>
      </BottomSheetModal>
      <BottomSheetModal
        index={0}
        ref={bottomSheetRef}
        enablePanDownToClose={false}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
      >
        <BottomSheetScrollView
          style={{ paddingHorizontal: 16, paddingVertical: 8 }}
        >
          <Text fontSize={28} fontWeight="500">
            {name}
          </Text>
          <Box mt={8}>
            <Text fontSize={18} color="green600" fontWeight="500">
              What can be thrown away?
            </Text>
            <Box mt={4}>
              {trashData.shouldBeDumped.map((item) => (
                <Text key={item} fontSize={16} mt={2}>
                  - {item}
                </Text>
              ))}
            </Box>
          </Box>
          <Box mt={8} mb={50}>
            <Text fontSize={18} color="red500" fontWeight="500">
              What can't be thrown away?
            </Text>
            <Box mt={4}>
              {trashData.shouldNotBeDumped.map((item) => (
                <Text key={item} fontSize={16} mt={2}>
                  - {item}
                </Text>
              ))}
            </Box>
          </Box>
        </BottomSheetScrollView>
      </BottomSheetModal>
    </Div>
  );
};
