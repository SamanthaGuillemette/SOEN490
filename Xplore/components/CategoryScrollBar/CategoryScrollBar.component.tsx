import { useState } from "react";
import { StyleProp, TouchableOpacity, View, ViewStyle } from "react-native";
import { ScrollBar } from "react-native-ui-lib";
import { useThemeColor } from "../../hooks";
import { Text } from "../Text";
import styles from "./CategoryScrollBar.styles";

interface Category {
  name: string;
}

interface CategoryScrollBarProps {
  categories: Category[];
  style?: StyleProp<ViewStyle>;
}

export const CategoryScrollBar = (props: CategoryScrollBarProps) => {
  const { categories, style } = props;
  const primaryColor = useThemeColor("primary");
  const generalGrayColor = useThemeColor("generalGray");
  const [activeCategory, setActiveCategory] = useState(categories[0].name);

  return (
    <View style={style}>
      <ScrollBar
        useList={true} // use FlatList
        data={categories}
        contentContainerStyle={styles.contentContainer}
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
    </View>
  );
};
