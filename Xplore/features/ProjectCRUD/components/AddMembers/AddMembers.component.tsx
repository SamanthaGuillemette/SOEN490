import styles from "./AddMembers.styles";
import { SearchBar, UsersList, View } from "../../../../components";
import { useListUsersPaginated } from "../../../../services/api/userProfile";
import Spinner from "react-native-loading-spinner-overlay/lib";

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

const formatUserListData = (data: any) => {
  const formattedData: any = [];
  data?.pages.forEach((page: { projects: any }) =>
    page.projects.forEach((project: any) => formattedData.push(project as any))
  );
  // console.log(formattedData[1]);
  return formattedData;
};

export const AddMembers = (props: AddMembersProps) => {
  const { setAllMembers, allMembers } = props;
  const { data, isLoading, fetchNextPage } = useListUsersPaginated();
  return (
    <View style={styles.container}>
      {/* Needed components */}

      <SearchBar style={styles.searchBar} />
      {isLoading ? (
        <Spinner visible={true} />
      ) : (
        <UsersList
          setAllMembers={setAllMembers}
          allMembers={allMembers}
          fetchMoreUsers={fetchNextPage}
          data={formatUserListData(data)}
          messageUserList={false}
          selectUserList={true}
        />
      )}
    </View>
  );
};
