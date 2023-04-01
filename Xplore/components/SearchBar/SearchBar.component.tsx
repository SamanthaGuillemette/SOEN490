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
  onFilterButtonPress?: (isFilterButtonActive: boolean) => void;
  onQueryChange?: (query: string) => void;
}

export const SearchBar = (props: SearchBarProps) => {
  // Give default values to props
  const {
    style,
    searchPlaceHolder = "Search",
    showFilterButton = false,
    onFilterButtonPress,
    onQueryChange,
  } = props;

  const bodyTextColor = useThemeColor("bodyText");
  const [isSearchInputActive, setIsSearchInputActive] = useState(false);
  const [isFilterButtonActive, setIsFilterButtonActive] = useState(false);

  const handleQueryChange = (query: string) => {
    onQueryChange && onQueryChange(query);
  };

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
          style={[styles.searchBoxInput, { color: bodyTextColor }]}
          placeholderTextColor={bodyTextColor}
          placeholder={searchPlaceHolder}
          onFocus={() => setIsSearchInputActive(true)}
          onBlur={() => setIsSearchInputActive(false)}
          onChangeText={handleQueryChange}
        />
      </View>

      {showFilterButton && (
        <TouchableOpacity
          onPress={() => {
            setIsFilterButtonActive(!isFilterButtonActive); // Toggle the opposite value
            onFilterButtonPress && onFilterButtonPress(!isFilterButtonActive);
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
