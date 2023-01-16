import { useState } from "react";
import { Image, TouchableOpacity, FlatList } from "react-native";
import { View } from "../View";
import { User } from "../User";
import styles from "./UsersList.styles";

interface UsersListProps {
  data: any[];
}

export const UsersList = (props: UsersListProps) => {
  const [selected, setSelected] = useState(false);

  const renderUsers = ({ item }) => {
    return (
      <View style={styles.listContainer}>
        <TouchableOpacity onPress={() => setSelected(!selected)}>
          <User
            avatar={item.avatar}
            username={item.username}
            xp={item.xp}
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

  return (
    <FlatList
      data={props.data}
      renderItem={renderUsers}
      keyExtractor={(item) => item.id}
    />
  );
};
