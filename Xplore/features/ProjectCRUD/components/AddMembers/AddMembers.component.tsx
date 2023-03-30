import styles from "./AddMembers.styles";
import { SearchBar, UsersList, ShadowView } from "../../../../components";
import { useListUsersPaginated } from "../../../../services/api/userProfile";
import { useListUsers } from "../../../../services/api/search";
import Spinner from "react-native-loading-spinner-overlay/lib";
import { useState } from "react";
import { Modal, View } from "react-native";
import { useQuery } from "react-query";
import api from "../../../../services/appwrite/api";

// interface UsersType {
//   id: string;
//   username: string;
//   avatar: string;
//   xp: number;
// }
interface AddMembersProps {
  setAllMembers: (value: any[]) => void;
  allMembers: any;
}

export const AddMembers = (props: AddMembersProps) => {
  //const { setAllMembers, allMembers = [] } = props;
  const [query, setQuery] = useState<string>("");
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const users = useListUsers();

  // Filter the Users array based on the search query
  const filteredUsers = users.filter((user: any) =>
    user.username.toLowerCase().includes(query.toLowerCase())
  );

  // Quering current user's data
  const { data: userdata } = useQuery("user data", () => api.getAccount());
  let userId: string = userdata?.$id as string;

  function handleIndexSelect() {
    const groupMembers = [...selectedUsers, userId];
    console.log("MEMBERS", groupMembers);
  }

  return (
    <View style={styles.fullView}>
      <View style={styles.centeredView}>
        <SearchBar style={styles.searchBar} onQueryChange={setQuery} />
        <UsersList
          data={filteredUsers}
          selectUserList={true}
          messageUserList={false}
          setList={props.setAllMembers}
        />
      </View>
    </View>
  );
};
