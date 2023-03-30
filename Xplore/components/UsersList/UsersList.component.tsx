import { useEffect, useState } from "react";
import { TouchableOpacity, ScrollView } from "react-native";
import { View } from "../View";
import { User } from "../User";
import styles from "./UsersList.styles";
import { Icon } from "../Icon";
import { MessageMember } from "../MessageMember";
import { NavigationProp } from "@react-navigation/native";
import { useQuery } from "react-query";
import api from "../../services/appwrite/api";

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
  setList?: any;
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
  const { setList } = props;
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

  const handleUserSelect = (userId: string, isSelected: boolean) => {
    if (isSelected) {
      setSelectedUsers([...selectedUsers, userId]);
    } else {
      setSelectedUsers(selectedUsers.filter((id) => id !== userId));
    }
  };

  // Quering current user's data
  const { data: userdata } = useQuery("user data", () => api.getAccount());
  let userID: string = userdata?.$id as string;

  useEffect(() => {
    setList([...selectedUsers, userID]);
  }, [selectedUsers, setList, userID]);

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
                handleUserSelect(user.id, !selectedUsers.includes(isSelected))
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
