import { NavigationProp } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native";
import { Icon, SearchBar, UsersList, View } from "../../components";
import { useThemeColor } from "../../hooks/useThemeColor";
import styles from "./Search.styles";

interface SearchProps {
  navigation: NavigationProp<any>;
}

interface UsersType {
  id: string;
  username: string;
  avatar: string;
  xp: number;
}

const Users: UsersType[] = [
  {
    id: "1",
    username: "Josh Lewis",
    avatar: "https://picsum.photos/200",
    xp: 103597,
  },
  {
    id: "2",
    username: "Amy Lucas",
    avatar: "https://picsum.photos/200",
    xp: 103597,
  },
  {
    id: "3",
    username: "Landon Clayton",
    avatar: "https://picsum.photos/200",
    xp: 103597,
  },
  {
    id: "4",
    username: "Elva Moore",
    avatar: "https://picsum.photos/200",
    xp: 103597,
  },
  {
    id: "5",
    username: "Martin Garza",
    avatar: "https://picsum.photos/200",
    xp: 103597,
  },
  {
    id: "6",
    username: "Bernice Lewis",
    avatar: "https://picsum.photos/200",
    xp: 103597,
  },
  {
    id: "7",
    username: "Landon Clayton",
    avatar: "https://picsum.photos/200",
    xp: 103597,
  },
  {
    id: "8",
    username: "Martin Garza",
    avatar: "https://picsum.photos/200",
    xp: 103597,
  },
];

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
      <View style={styles.resultsContainer}>
        <UsersList data={Users} selectUserList={false} messageUserList={true} />
      </View>
    </SafeAreaView>
  );
};

export default Search;
