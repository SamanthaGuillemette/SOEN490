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
import styles from "./SearchBar.styles";

interface SearchBarProps {
  style?: StyleProp<ViewStyle>;
  searchPlaceHolder?: string;
  showFilterButton?: boolean;
}

export const SearchBar = (props: SearchBarProps) => {
  // Give default values to props
  const {
    searchPlaceHolder = "Search",
    showFilterButton = false,
    style,
  } = props;

  const bodyTextColor = useThemeColor("bodyText");
  const [isSearchInputActive, setIsSearchInputActive] = useState(false);
  const [isFilterButtonActive, setIsFilterButtonActive] = useState(false);

  return (
    <ShadowView
      shadowOffset={4}
      backgroundColor="backgroundSecondary"
      isInnerShadow={false}
      style={[styles.container, style]}
    >
      <View style={styles.searchBox}>
        <Icon
          name="search"
          color={isSearchInputActive ? "primary" : "smallText"}
        />
        <TextInput
          style={styles.searchBoxInput}
          placeholderTextColor={bodyTextColor}
          placeholder={searchPlaceHolder}
          onFocus={() => setIsSearchInputActive(true)}
          onBlur={() => setIsSearchInputActive(false)}
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
