import * as React from 'react';
import { TextInput } from "react-native";
import { Icon, ShadowView, View } from "../../components";
import { useThemeColor } from "../../hooks";
import styles from "./SearchBar.styles";

const MyComponent = () => {
  const bodyText = useThemeColor("bodyText");

  return (
    <ShadowView
      shadowOffset={4}
      backgroundColor="backgroundSecondary"
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

export default MyComponent;