import { useState } from "react";
import { Modal, View } from "react-native";
import { useThemeColor } from "../../hooks/useThemeColor";
import { ShadowView } from "../ShadowView";
import { PrimaryButton } from "../PrimaryButton";
import { SecondaryButton } from "../SecondaryButton";
import { UsersList } from "../UsersList";
import { SearchBar } from "../SearchBar";
import { Text } from "../Text";
import styles from "./AddMemberModal.styles";
import { useListUsersPaginated } from "../../services/api/userProfile";
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

interface AddMemberModalProps {
  setAllMembers: (value: any[]) => void;
  allMembers: any[];
  setAddModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const formatUserListData = (data: any) => {
  console.log("data", data);
  const formattedData: any = [];
  data?.pages.forEach((page: { projects: any }) =>
    page.projects.forEach((project: any) => formattedData.push(project as any))
  );
  // console.log(formattedData[1]);
  return formattedData;
};

export const AddMemberModal = (props: AddMemberModalProps) => {
  const [modalVisible, setModalVisible] = useState<boolean>(true);
  const backgroundSecondary = useThemeColor("backgroundSecondary");
  const { setAllMembers, allMembers, setAddModalVisible } = props;
  const { data, isLoading, fetchNextPage } = useListUsersPaginated();
  function handleIndexSelect() {
    setModalVisible(!modalVisible);
    setAddModalVisible(!modalVisible);
  }

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={handleIndexSelect}
    >
      <View style={styles.fullView}>
        <View style={styles.centeredView}>
          <ShadowView
            style={[styles.modalView, { backgroundColor: backgroundSecondary }]}
          >
            <Text variant="h4" style={styles.alertText}>
              Add new members
            </Text>
            <SearchBar style={styles.searchBar} />
            {isLoading ? (
              <Spinner visible={true} />
            ) : data ? (
              <UsersList
                setAllMembers={setAllMembers}
                allMembers={allMembers}
                fetchMoreUsers={fetchNextPage}
                data={formatUserListData(data)}
                messageUserList={false}
                selectUserList={true}
              />
            ) : null}
            <PrimaryButton
              label="ADD"
              onPress={handleIndexSelect}
              style={styles.primaryButton}
            />
            <SecondaryButton
              label="Cancel"
              onPress={handleIndexSelect}
              style={styles.secondaryButton}
            />
          </ShadowView>
        </View>
      </View>
    </Modal>
  );
};
