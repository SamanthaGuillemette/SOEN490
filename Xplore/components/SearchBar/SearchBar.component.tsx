import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { ShadowView } from "../ShadowView";
import styles from "./SearchBar.styles";

const MyComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);

  return (
    <ShadowView
      shadowOffset={4}
      backgroundColor="backgroundSecondary"
      style={styles.container}>
        <Searchbar
            placeholder="Search"
            placeholderTextColor="#585757"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={styles.searchBox}
        />
    </ShadowView>
  );
};

export default MyComponent;