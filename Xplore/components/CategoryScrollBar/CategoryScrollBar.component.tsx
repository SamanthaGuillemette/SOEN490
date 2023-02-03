import { TouchableOpacity, View } from "react-native";
import { ScrollBar } from "react-native-ui-lib";
import { useThemeColor } from "../../hooks";
import { Text } from "../Text";
import styles from "./CategoryScrollBar.styles";

interface Category {
  name: string;
  isActive: boolean;
}

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
            style={[
              styles.categoryButton,
              {
                backgroundColor: item.isActive
                  ? primaryColor
                  : generalGrayColor,
              },
            ]}
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
