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
  navigation?: NavigationProp<any>;
}

//  UsersItem component creates user and sets selected to false initially
export const UserItemSelect = (props: UsersType) => {
  const [selected, setSelected] = useState(false);
  return (
    <View style={styles.listContainer}>
      <TouchableOpacity onPress={() => setSelected(!selected)}>
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

interface UsersListProps {
  data: any;
  messageUserList: boolean;
  selectUserList: boolean;
  navigation?: NavigationProp<any>;
}

// UsersList renders users
export const UsersList = (props: UsersListProps) => {
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
