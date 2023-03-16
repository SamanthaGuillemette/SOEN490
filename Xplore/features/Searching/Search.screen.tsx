import { NavigationProp } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native";
import { Icon, SearchBar, View } from "../../components";
import { useThemeColor } from "../../hooks/useThemeColor";
import styles from "./Search.styles";

interface SearchProps {
  navigation: NavigationProp<any>;
}

const Search = (props: SearchProps) => {
  const { navigation } = props;
  const background = useThemeColor("background");

  return (
    <SafeAreaView
      style={[styles.safeAreaStyle, { backgroundColor: background }]}
    >
      <View style={styles.searchBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon style={styles.arrowIcon} name="chevron-left" />
        </TouchableOpacity>
        <SearchBar />
      </View>
    </SafeAreaView>
  );
};

export default Search;
