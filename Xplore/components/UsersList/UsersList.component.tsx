import { useState } from "react";
import { TouchableOpacity, ScrollView } from "react-native";
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
  return (
    <ScrollView pagingEnabled={true}>
      {props.data.map((user: UsersType) => (
        <UserItem
          key={user.id}
          username={user.username}
          avatar={user.avatar}
          xp={user.xp}
          id={user.id}
        />
      ))}
    </ScrollView>
  );
};
