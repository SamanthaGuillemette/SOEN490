import { useState } from "react";
import { Modal, View } from "react-native";
import { useThemeColor } from "../../hooks/useThemeColor";
import { ShadowView } from "../ShadowView";
import { PrimaryButton } from "../PrimaryButton";
import { SecondaryButton } from "../SecondaryButton";
import { UsersList } from "../UsersList";
import { SearchBar } from "../SearchBar";
import { createNewGroupChat } from "../../services/api/chats";
import { addToChat, removeFromChat } from "../../services/api/chatSettings";
import { createGroupAddNotif } from "../../services/api/notifications";
import styles from "./MembersActionsModal.styles";

interface MembersActionsModalProps {
  setActionsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  action: string; // this is used to label primary action button
  users: any;
  chatID?: string;
  chatName?: string;
}

export const MembersActionsModal = ({
  setActionsModalVisible: setActionsModalVisible,
  action,
  users,
  chatID,
  chatName,
}: MembersActionsModalProps) => {
  const [modalVisible, setModalVisible] = useState<boolean>(true);
  const backgroundSecondary = useThemeColor("backgroundSecondary");

  // Create a state variable to hold the selected users' ids
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

  // function handleIndexSelect() {
  //   setModalVisible(!modalVisible);
  //   setActionsModalVisible(!modalVisible);
  //   if (action === "Create Group" && selectedUsers.length > 0) {
  //     const groupMembers = [...selectedUsers, userId];
  //     createNewGroupChat(groupMembers);
  //   }
  //   if (action === "Add Members" && selectedUsers.length > 0) {
  //     addToChat(selectedUsers, chatID);
  //     for (const userID of selectedUsers) {
  //       createGroupAddNotif(userID, chatID, chatName);
  //     }
  //   }
  //   if (action === "Remove Members" && selectedUsers) {
  //     removeFromChat(selectedUsers, chatID);
  //   }
  // }
  function handleIndexSelect() {
    setModalVisible(!modalVisible);
    setActionsModalVisible(!modalVisible);
    if (action === "Create Group" && selectedUsers.length > 1) {
      createNewGroupChat(selectedUsers);
    }
    if (action === "Add Members" && selectedUsers.length > 0) {
      addToChat(selectedUsers, chatID);
      for (const userID of selectedUsers) {
        createGroupAddNotif(userID, chatID, chatName);
      }
    }
    if (action === "Remove Members" && selectedUsers) {
      removeFromChat(selectedUsers, chatID);
    }
  }

  const [query, setQuery] = useState<string>("");

  // Filter the Users array based on the search query
  const filteredUsers = users.filter((user: any) =>
    user.username.toLowerCase().includes(query.toLowerCase())
  );
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
            <SearchBar style={styles.searchBar} onQueryChange={setQuery} />
            <UsersList
              data={filteredUsers}
              selectUserList={true}
              messageUserList={false}
              setList={setSelectedUsers}
            />
            <View style={styles.buttons}>
              <PrimaryButton
                label={action}
                onPress={handleIndexSelect}
                style={styles.primaryButton}
              />
              <SecondaryButton
                label="Cancel"
                onPress={() => {
                  setModalVisible(false);
                  setSelectedUsers([]); // unselect the users
                  setActionsModalVisible(false);
                }}
                style={styles.secondaryButton}
              />
            </View>
          </ShadowView>
        </View>
      </View>
    </Modal>
  );
};
