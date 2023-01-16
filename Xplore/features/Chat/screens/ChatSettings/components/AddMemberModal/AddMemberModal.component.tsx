import { useState } from "react";
import { Modal, View } from "react-native";
import { useThemeColor } from "../../../../../../hooks/useThemeColor";
import {
  ShadowView,
  PrimaryButton,
  SecondaryButton,
  UsersList,
  SearchBar,
} from "../../../../../../components";
import styles from "./AddMemberModal.styles";

interface AddMemberModalProps {
  setAddModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Users: any[] = [
  {
    id: 1,
    username: "Josh Lewis",
    avatar: "https://picsum.photos/200",
    xp: 103597,
  },
  {
    id: 2,
    username: "Amy Lucas",
    avatar: "https://picsum.photos/200",
    xp: 103597,
  },
  {
    id: 3,
    username: "Landon Clayton",
    avatar: "https://picsum.photos/200",
    xp: 103597,
  },
  {
    id: 4,
    username: "Elva Moore",
    avatar: "https://picsum.photos/200",
    xp: 103597,
  },
  {
    id: 5,
    username: "Martin Garza",
    avatar: "https://picsum.photos/200",
    xp: 103597,
  },
  {
    id: 6,
    username: "Bernice Lewis",
    avatar: "https://picsum.photos/200",
    xp: 103597,
  },
  {
    id: 7,
    username: "Landon Clayton",
    avatar: "https://picsum.photos/200",
    xp: 103597,
  },
  {
    id: 8,
    username: "Martin Garza",
    avatar: "https://picsum.photos/200",
    xp: 103597,
  },
];

export const AddMemberModal = ({ setAddModalVisible }: AddMemberModalProps) => {
  const [modalVisible, setModalVisible] = useState<boolean>(true);
  const backgroundSecondary = useThemeColor("backgroundSecondary");
  function handleIndexSelect() {
    setModalVisible(!modalVisible);
    setAddModalVisible(!modalVisible);
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={handleIndexSelect}
    >
      <View style={styles.centeredView}>
        <ShadowView
          style={[styles.modalView, { backgroundColor: backgroundSecondary }]}
        >
          <SearchBar style={styles.searchBar} />
          <UsersList data={Users} />
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
    </Modal>
  );
};
