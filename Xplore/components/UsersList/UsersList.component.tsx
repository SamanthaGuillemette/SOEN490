import { useState } from "react";
import { TouchableOpacity, ScrollView } from "react-native";
import { View } from "../View";
import { User } from "../User";
import styles from "./UsersList.styles";
import { Icon } from "../Icon";
import { MessageMember } from "../MessageMember";
import { NavigationProp } from "@react-navigation/native";

interface UsersType {
  userid: string;
  username: string;
  profilepicture: string;
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
          avatar={props.profilepicture}
          username={props.username}
          xp={props.xp}
          id={props.userid}
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
        id={props.userid}
        avatar={props.profilepicture}
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
              key={user.userid}
              username={user.username}
              profilepicture={user.profilepicture}
              xp={user.xp}
              userid={user.userid}
              navigation={props.navigation}
            />
          ))
        : null}
      {props.messageUserList
        ? props.data.map((user: UsersType) => (
            <UserItemMessage
              key={user.userid}
              username={user.username}
              profilepicture={user.profilepicture}
              xp={user.xp}
              userid={user.userid}
              navigation={props.navigation}
            />
          ))
        : null}
    </ScrollView>
  );
};
