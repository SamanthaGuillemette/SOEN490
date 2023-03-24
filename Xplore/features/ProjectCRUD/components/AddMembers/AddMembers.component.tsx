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

// const Users: UsersType[] = [
//   {
//     id: "1",
//     username: "Josh Lewis",
//     avatar: "https://picsum.photos/200",
//     xp: 103597,
//   },
//   {
//     id: "2",
//     username: "Amy Lucas",
//     avatar: "https://picsum.photos/200",
//     xp: 103597,
//   },
//   {
//     id: "3",
//     username: "Landon Clayton",
//     avatar: "https://picsum.photos/200",
//     xp: 103597,
//   },
//   {
//     id: "4",
//     username: "Elva Moore",
//     avatar: "https://picsum.photos/200",
//     xp: 103597,
//   },
//   {
//     id: "5",
//     username: "Martin Garza",
//     avatar: "https://picsum.photos/200",
//     xp: 103597,
//   },
//   {
//     id: "6",
//     username: "Bernice Lewis",
//     avatar: "https://picsum.photos/200",
//     xp: 103597,
//   },
//   {
//     id: "7",
//     username: "Landon Clayton",
//     avatar: "https://picsum.photos/200",
//     xp: 103597,
//   },
//   {
//     id: "8",
//     username: "Martin Garza",
//     avatar: "https://picsum.photos/200",
//     xp: 103597,
//   },
// ];

const formatUserListData = (data: any) => {
  const formattedData: any = [];
  data?.pages.forEach((page: { projects: any }) =>
    page.projects.forEach((project: any) => formattedData.push(project as any))
  );
  return formattedData;
};
export const AddMembers = () => {
  const { data, isLoading, fetchNextPage } = useListUsersPaginated();
  return (
    <View style={styles.container}>
      {/* Needed components */}

      <SearchBar style={styles.searchBar} />
      {isLoading ? (
        <Spinner visible={true} />
      ) : (
        <UsersList
          fetchMoreUsers={fetchNextPage}
          data={formatUserListData(data)}
          messageUserList={false}
          selectUserList={true}
        />
      )}
    </View>
  );
};
