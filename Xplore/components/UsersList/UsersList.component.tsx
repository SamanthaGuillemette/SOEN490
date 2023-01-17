import { useState } from "react";
import { Image, TouchableOpacity, FlatList } from "react-native";
import { View } from "../View";
import { User } from "../User";
import styles from "./UsersList.styles";

// interface UsersListProps {
//   data: any[];
// }

interface UsersType {
  id: string;
  username: string;
  avatar: string;
  xp: number;
}

interface UserTypeItem {
  item: UsersType;
  index: number;
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

export const UserItem = (props: UsersType) => {
  const [selected, setSelected] = useState(false);
  return (
    <View style={styles.listContainer}>
      <TouchableOpacity onPress={() => setSelected(!selected)}>
        <User
          avatar={props.avatar}
          username={props.username}
          xp={props.xp}
          style={styles.user}
        />
        {selected ? (
          <Image
            source={require("../../assets/check-circle.png")}
            style={styles.checkCircleImg}
          />
        ) : null}
      </TouchableOpacity>
    </View>
  );
};

export const UsersList = () => {
  const renderUsers = ({ item }: UserTypeItem) => {
    return (
      <UserItem
        username={item.username}
        avatar={item.avatar}
        xp={item.xp}
        id={item.id}
      />
    );
  };

  return (
    <FlatList
      data={Users}
      renderItem={renderUsers}
      keyExtractor={({ id }) => id}
    />
  );
};
