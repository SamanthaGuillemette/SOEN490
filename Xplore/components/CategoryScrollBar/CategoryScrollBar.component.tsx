import { TouchableOpacity, View } from "react-native";
import { ScrollBar } from "react-native-ui-lib";
import { useThemeColor } from "../../hooks";
import { Text } from "../Text";
import styles from "./CategoryScrollBar.styles";

type Category = {
  name: string;
  isActive: boolean;
};

interface CategoryScrollBarProps {
  categories: Category[];
}

export const CategoryScrollBar = (props: CategoryScrollBarProps) => {
  const { categories } = props;

  const primaryColor = useThemeColor("primary");
  const generalGrayColor = useThemeColor("generalGray");

  return (
    <ScrollBar
      useList={true} // use FlatList
      data={categories}
      contentContainerStyle={styles.categoryListContainer}
      renderItem={({ item }: any) => (
        <View key={item.name}>
          <TouchableOpacity
            style={{
              marginRight: 8,
              height: 25,
              borderRadius: 20,
              paddingHorizontal: 25,
              justifyContent: "center",
              backgroundColor: item.isActive ? primaryColor : generalGrayColor,
            }}
            onPress={() => {
              // eslint-disable-next-line no-alert
              alert("category selected");
            }}
          >
            <Text
              variant="label"
              color="bodyText"
              lightColor={item.isActive ? "white" : ""}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
};
