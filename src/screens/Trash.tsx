import React from "react";
import { FlatList } from "react-native";
import { Div, Icon, Text } from "react-native-magnus";

const renderItem = ({ item, index }) => {
  return <Text fontSize={20}>{`${item}`}</Text>;
};

const TrashFooter = ({
  color,
  content,
}: {
  color: string;
  content: string;
}) => {
  return (
    <Div bg={color} flex={1} rounded={14} alignItems="center" p={20}>
      <Icon name="trash" fontFamily="Entypo" color="black" fontSize={30} />
      <Text fontSize={18} mt={20}>
        {content}
      </Text>
    </Div>
  );
};

export const TrashView = () => {
  return (
    <Div flex={1} p={30} w="100%">
      <Div flex={4} alignItems="center">
        <Text fontSize={25}>Śmieć</Text>
        <FlatList
          contentContainerStyle={{
            justifyContent: "flex-start",
            marginTop: 20,
          }}
          data={["Wrzuc do żółtego pojemnika", "Wyrzuć tego śmiecia", "Zjedz"]}
          renderItem={renderItem}
        />
      </Div>
      <TrashFooter color="yellow" content="Wrzuć do żółtego pojemnika" />
    </Div>
  );
};
