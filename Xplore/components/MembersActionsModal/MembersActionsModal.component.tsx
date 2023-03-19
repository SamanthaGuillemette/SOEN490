import { useState } from "react";
import { Modal, View } from "react-native";
import { useListUsers } from "../../services/api/search";
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
}

export const MembersActionsModal = ({
  setActionsModalVisible: setActionsModalVisible,
  action,
}: MembersActionsModalProps) => {
  const [modalVisible, setModalVisible] = useState<boolean>(true);
  const backgroundSecondary = useThemeColor("backgroundSecondary");
  function handleIndexSelect() {
    setModalVisible(!modalVisible);
    setActionsModalVisible(!modalVisible);
  }
  const Users = useListUsers();
  const [query, setQuery] = useState<string>("");

  // Filter the Users array based on the search query
  const filteredUsers = Users.filter((user) =>
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
            />
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
          </ShadowView>
        </View>
      </View>
    </Modal>
  );
};
