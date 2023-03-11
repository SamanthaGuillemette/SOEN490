import {
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { useThemeColor } from "../../hooks";
import { Icon } from "../Icon";
import { View } from "../View";
import { MemberChip } from "../MemberChip";
import styles from "./MemberChipAdder.styles";
import { AddMemberModal } from "../AddMemberModal";
import { useState } from "react";

interface MemberChipAdderProps extends TouchableOpacityProps {
  style?: StyleProp<ViewStyle>;
}

export const MemberChipAdder = () => {
  const backgroundSecondary = useThemeColor("backgroundSecondary");
  const primary = useThemeColor("primary");

  const [addMemberModalVisible, setAddMemberModalVisible] =
    useState<any>(false);

  return (
    <View style={styles.containerParticipants}>
      <TouchableOpacity
        style={[
          styles.buttonAdder,
          { backgroundColor: backgroundSecondary, borderColor: primary },
        ]}
        onPress={() => setAddMemberModalVisible(true)}
      >
        <Icon
          name="plus"
          size="large"
          color="primary"
          style={styles.iconAdder}
        />
        {addMemberModalVisible === true && (
          <AddMemberModal setAddModalVisible={setAddMemberModalVisible} />
        )}
      </TouchableOpacity>
      <MemberChip userName="Amy" avatar="https://picsum.photos/200" />
      <MemberChip userName="Bernice" avatar="https://picsum.photos/201" />
    </View>
  );
};
