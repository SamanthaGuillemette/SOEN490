import { useState } from "react";
import { Modal, View } from "react-native";
import { useThemeColor } from "../../hooks/useThemeColor";
import { ShadowView } from "../ShadowView";
import { PrimaryButton } from "../PrimaryButton";
import { SecondaryButton } from "../SecondaryButton";
import { UsersList } from "../UsersList";
import { SearchBar } from "../SearchBar";
import styles from "./MembersActionsModal.styles";

interface MembersActionsModalProps {
  setActionsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  action: string; // this is used to label primary action button
  users: any;
}

export const MembersActionsModal = ({
  setActionsModalVisible: setActionsModalVisible,
  action,
  users,
}: MembersActionsModalProps) => {
  const [modalVisible, setModalVisible] = useState<boolean>(true);
  const backgroundSecondary = useThemeColor("backgroundSecondary");

  // Create a state variable to hold the selected users' ids
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

  function handleIndexSelect() {
    setModalVisible(!modalVisible);
    setActionsModalVisible(!modalVisible);
    // Log the selected user ids to the console
    console.log(selectedUsers);
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
              onSelect={(id: string) =>
                setSelectedUsers((prevSelectedUsers) => [
                  ...prevSelectedUsers,
                  id,
                ])
              }
            />
            <View style={styles.buttons}>
              <PrimaryButton
                label={action}
                onPress={handleIndexSelect}
                style={styles.primaryButton}
              />
              <SecondaryButton
                label="Cancel"
                onPress={handleIndexSelect}
                style={styles.secondaryButton}
              />
            </View>
          </ShadowView>
        </View>
      </View>
    </Modal>
  );
};
