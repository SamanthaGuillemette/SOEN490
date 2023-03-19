import { useState } from "react";
import { TouchableOpacity, ScrollView } from "react-native";
import { View } from "../View";
import { User } from "../User";
import styles from "./UsersList.styles";
import { Icon } from "../Icon";
import { MessageMember } from "../MessageMember";
import { NavigationProp } from "@react-navigation/native";

interface UsersType {
  id: string;
  username: string;
  avatar: string;
  xp: number;
  selected?: boolean;
  navigation?: NavigationProp<any>;
}

interface UsersListProps {
  data: UsersType[];
  messageUserList: boolean;
  selectUserList: boolean;
  navigation?: NavigationProp<any>;
  onSelect: (userId: string, isSelected: boolean) => void;
}

//  UsersItem component creates user and sets selected to false initially
export const UserItemSelect = (
  props: UsersType & { onSelect: (id: string) => void }
) => {
  const [selected, setSelected] = useState(false);
  const { onSelect, id } = props;

  const handleSelect = () => {
    setSelected(!selected);
    onSelect(id);
  };

  return (
    <View style={styles.listContainer}>
      <TouchableOpacity onPress={handleSelect}>
        <User
          avatar={props.avatar}
          username={props.username}
          xp={props.xp}
          id={props.id}
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

//  UsersItem component creates user
export const UserItemMessage = (props: UsersType) => {
  return (
    <View>
      <MessageMember
        id={props.id}
        avatar={props.avatar}
        username={props.username}
        xp={props.xp}
        navigation={props.navigation}
      />
    </View>
  );
};

// UsersList renders users
export const UsersList = (props: UsersListProps) => {
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

  const handleUserSelect = (userId: string, isSelected: boolean) => {
    if (isSelected) {
      setSelectedUsers([...selectedUsers, userId]);
    } else {
      setSelectedUsers(selectedUsers.filter((id) => id !== userId));
    }
    props.onSelect(userId, isSelected);
  };

  return (
    <ScrollView pagingEnabled={true}>
      {props.selectUserList
        ? props.data.map((user: UsersType) => (
            <UserItemSelect
              key={user.id}
              username={user.username}
              avatar={user.avatar}
              xp={user.xp}
              id={user.id}
              navigation={props.navigation}
              selected={selectedUsers.includes(user.id)}
              onSelect={(isSelected) =>
                handleUserSelect(user.id, Boolean(isSelected))
              }
            />
          ))
        : null}
      {props.messageUserList
        ? props.data.map((user: UsersType) => (
            <UserItemMessage
              key={user.id}
              username={user.username}
              avatar={user.avatar}
              xp={user.xp}
              id={user.id}
              navigation={props.navigation}
            />
          ))
        : null}
    </ScrollView>
  );
};
