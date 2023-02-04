import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { ScrollBar } from "react-native-ui-lib";
import { useThemeColor } from "../../hooks";
import { Text } from "../Text";
import styles from "./CategoryScrollBar.styles";

interface Category {
  name: string;
  isActive: boolean; // TODO: We may not need this property
}

interface CategoryScrollBarProps {
  categories: Category[];
}

export const CategoryScrollBar = (props: CategoryScrollBarProps) => {
  const { categories } = props;
  const primaryColor = useThemeColor("primary");
  const generalGrayColor = useThemeColor("generalGray");
  const [activeCategory, setActiveCategory] = useState(categories[0].name);

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
                backgroundColor:
                  item.name === activeCategory
                    ? primaryColor
                    : generalGrayColor,
              },
            ]}
            onPress={() => {
              setActiveCategory(item.name);
              // eslint-disable-next-line no-alert
              alert(`category -- ${item.name} -- is selected`);
            }}
          >
            <Text
              variant="label"
              color="bodyText"
              lightColor={item.name === activeCategory ? "white" : ""}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
};
