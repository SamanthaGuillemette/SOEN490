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
import { useAllMembersInfo } from "../../services/api/projects";

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
          <AddMemberModal
            setAllMembers={setAllMembers}
            allMembers={allMembers}
            setAddModalVisible={setAddMemberModalVisible}
          />
        )}
      </TouchableOpacity>
      {allMembers.map((member: any, index) => {
        console.log(member.name); // add this line to log the value of member
        return (
          <MemberChip key={index} username={member} avatar={member.avatar} />
        );
      })}
    </View>
  );
};
