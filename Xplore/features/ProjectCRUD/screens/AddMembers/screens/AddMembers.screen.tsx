import styles from "./AddMembers.styles";
import { SearchBar, UsersList, View } from "../../../../../components";

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

const AddMembers = () => {
  return (
    <View style={styles.container}>
      {/* Needed components */}

      <SearchBar style={styles.searchBar} />
      <UsersList data={Users} />
    </View>
  );
};

export default AddMembers;
