import styles from "./AddMembers.styles";
import { SearchBar, UsersList } from "../../../../components";
import { useListUsers } from "../../../../services/api/search";
import { useState } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native";
interface AddMembersProps {
  setAllMembers: (value: any[]) => void;
  allMembers?: any[];
}

export const AddMembers = (props: AddMembersProps) => {
  const [query, setQuery] = useState<string>("");
  const users = useListUsers();

  // Filter the Users array based on the search query
  const filteredUsers = users.filter((user: any) =>
    user.username.toLowerCase().includes(query.toLowerCase())
  );

  console.log("HUH", props.allMembers);

  /*if (props.allMembers !== undefined) {
  const allMembers = props.allMembers;

  users.forEach((singleUser: any) => {
      if (
        allMembers.some((singleMember: any) => singleMember === singleUser.id)
      ) {
        singleUser.isAlreadyAMember = true;
      } else {
        singleUser.isAlreadyAMember = false;
      }
    });
  }*/

  //console.log(users);

  return (
    <View style={styles.fixedHeight}>
      <View style={styles.fullView}>
        <View style={styles.centeredView}>
          <SearchBar style={styles.searchBar} onQueryChange={setQuery} />
          <ScrollView style={styles.scrollView}>
            <UsersList
              data={filteredUsers}
              selectUserList={true}
              messageUserList={false}
              setList={props.setAllMembers}
            />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};
