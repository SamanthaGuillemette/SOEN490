import * as React from 'react';
import { TextInput } from "react-native";
import { View } from "../View";
import { Icon } from "../Icon";
import { ShadowView } from "../ShadowView";
import { useThemeColor } from "../../hooks";
import styles from "./SearchBar.styles";

export const SearchBar = () => {
  const bodyText = useThemeColor("bodyText");

  return (
    <ShadowView
      shadowOffset={4}
      backgroundColor="backgroundSecondary"
      isInnerShadow={false}
      style={styles.container}>
      <View style={styles.searchBox}>   
        <Icon name="search" color='smallText'/>
        <TextInput
          style={styles.searchBoxInput}
          placeholderTextColor={bodyText}
          placeholder="Search"
        />
      </View>
    </ShadowView>
  );
};