import { useState } from "react";
import { TouchableOpacity, ScrollView } from "react-native";
import { View } from "../View";
import { User } from "../User";
import styles from "./UsersList.styles";
import { Icon } from "../Icon";
import { MessageMember } from "../MessageMember";
import { NavigationProp } from "@react-navigation/native";
import { useQuery } from "react-query";
import api from "../../services/appwrite/api";

interface UsersItemSelectProps {
  userID: string;
  username: string;
  profilepicture: string;
  xp: number;
  navigation?: NavigationProp<any>;
  setAllMembers: (value: any[]) => void;
  allMembers: any[];
}

//  UsersItem component creates user and sets selected to false initially
export const UserItemSelect = (props: UsersItemSelectProps) => {
  const { setAllMembers, allMembers, userID } = props;
  const [selected, setSelected] = useState(false);
  return (
    <View style={styles.listContainer}>
      <TouchableOpacity
        onPress={() => {
          !selected
            ? setAllMembers([...allMembers, userID])
            : setAllMembers(allMembers.filter((id) => id !== userID));
          setSelected(!selected);
        }}
      >
        <User
          avatar={props.profilepicture}
          username={props.username}
          xp={props.xp}
          id={props.userID}
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
export const UserItemMessage = (props: any) => {
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
  fetchMoreUsers: () => void;
  setAllMembers: (value: any) => void;
  allMembers: any;
}

// UsersList renders users
export const UsersList = (props: UsersListProps) => {
  const { setAllMembers, allMembers } = props;

  const { data: userdata } = useQuery("user data", () => api.getAccount());
  let userId: string = userdata?.$id as string;

  return (
    <ScrollView
      pagingEnabled={true}
      onMomentumScrollBegin={props.fetchMoreUsers}
    >
      {props.selectUserList
        ? props.data.map((user: any, index) =>
            user.userID !== userId ? (
              <UserItemSelect
                setAllMembers={setAllMembers}
                allMembers={allMembers}
                key={index}
                username={user.username}
                profilepicture={user.profilepicture}
                xp={user.xp}
                userID={user.userID}
                navigation={props.navigation}
              />
            ) : (
              <></>
            )
          )
        : null}
      {props.messageUserList
        ? props.data.map((user: any, index) => (
            <UserItemMessage
              key={index}
              username={user.username}
              profilepicture={user.profilepicture}
              xp={user.xp}
              userid={user.userID}
              navigation={props.navigation}
            />
          ))
        : null}
    </ScrollView>
  );
};
