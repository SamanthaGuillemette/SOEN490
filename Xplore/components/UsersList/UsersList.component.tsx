import { useState } from "react";
import { TouchableOpacity, FlatList } from "react-native";
import { View } from "../View";
import { User } from "../User";
import styles from "./UsersList.styles";
import { Icon } from "../Icon";

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
//  UsersItem component creates user and sets selected to false initially
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
          <Icon
            name="check-circle"
            color="success"
            size="medium"
            style={styles.checkCircle}
          />
        ) : (
          <Icon
            name="circle"
            color="smallText"
            size="medium"
            style={styles.checkCircle}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

interface UsersListProps {
  data: any;
}

// UsersList renders users
export const UsersList = (props: UsersListProps) => {
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
      data={props.data}
      renderItem={renderUsers}
      keyExtractor={({ id }) => id}
    />
  );
};
