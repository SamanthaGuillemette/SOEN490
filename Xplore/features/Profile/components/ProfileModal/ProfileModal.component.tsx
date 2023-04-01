import { Modal } from "react-native";
import { ShadowView, View } from "../../../../components";
import { useThemeColor } from "../../../../hooks";
import styles from "./ProfileModal.styles";

interface ProfileModalProps {
  children: React.ReactNode;
  modalVisible: boolean;
}

export const ProfileModal = (props: ProfileModalProps) => {
  const { children, modalVisible } = props;
  const backgroundSecondary = useThemeColor("backgroundSecondary");

  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <View style={styles.fullView}>
        <View style={styles.centeredView}>
          <ShadowView
            style={[styles.modalView, { backgroundColor: backgroundSecondary }]}
          >
            {children}
          </ShadowView>
        </View>
      </View>
    </Modal>
  );
};
