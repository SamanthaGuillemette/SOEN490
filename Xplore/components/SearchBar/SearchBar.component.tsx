import { useState } from "react";
import {
  StyleProp,
  TextInput,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { View } from "../View";
import { Icon } from "../Icon";
import { ShadowView } from "../ShadowView";
import { useThemeColor } from "../../hooks";
import { colors } from "../../constants";
import styles from "./SearchBar.styles";

interface SearchBarProps {
  style?: StyleProp<ViewStyle>;
  searchText?: string;
  searchIconColor?: keyof typeof colors.light & keyof typeof colors.dark;
  showFilterButton?: boolean;
}

export const SearchBar = (props: SearchBarProps) => {
  // Give default values to props
  const {
    searchText = "Search",
    searchIconColor = "smallText",
    showFilterButton = false,
    style,
  } = props;

  const bodyTextColor = useThemeColor("bodyText");
  const [isFilterButtonActive, setIsFilterButtonActive] = useState(false);

  return (
    <ShadowView
      shadowOffset={4}
      backgroundColor="backgroundSecondary"
      isInnerShadow={false}
      style={[styles.container, style]}
    >
      <View style={styles.searchBox}>
        <Icon name="search" color={searchIconColor} />
        <TextInput
          style={styles.searchBoxInput}
          placeholderTextColor={bodyTextColor}
          placeholder={searchText}
        />
      </View>

      {showFilterButton && (
        <TouchableOpacity
          onPress={() => {
            // eslint-disable-next-line no-alert
            alert("filter button clicked");
            setIsFilterButtonActive(!isFilterButtonActive);
          }}
        >
          <Icon
            name="sliders"
            color={isFilterButtonActive ? "primary" : "smallText"}
          />
        </TouchableOpacity>
      )}
    </ShadowView>
  );
};
