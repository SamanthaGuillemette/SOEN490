import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  StyleProp,
  ViewStyle,
} from "react-native";
import { Icon, UserAvatar } from "../../../../components";
import { useThemeColor } from "../../../../hooks";

interface EditAvatarProps extends TouchableWithoutFeedbackProps {
  style?: StyleProp<ViewStyle>;
}

const EditAvatar = (props: EditAvatarProps) => {
  const whiteBackground = useThemeColor("backgroundSecondary");
  const { ...restOfProps } = props;

  return (
    <View>
      <View style={styles.ProfileIcons}>
        <TouchableWithoutFeedback {...restOfProps}>
          <View style={styles.Arrow_Left}>
            <Icon name="chevron-left" color="primary" size="large" />
          </View>
        </TouchableWithoutFeedback>
        <View>
          <Icon name="bell" color="primary" size="large" style={styles.Bell} />
          <View style={styles.RedDot}></View>
        </View>
      </View>

      <UserAvatar index={0} size={135} />
      <View
        style={[styles.EditContainer, { backgroundColor: whiteBackground }]}
      >
        <Icon name="edit" color="primary" size="medium" />
      </View>
    </View>
  );
};

export default EditAvatar;

const styles = StyleSheet.create({
  ProfileIcons: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
  },
  Bell: {
    flexDirection: "row",
    marginRight: 29,
  },
  Arrow_Left: {
    flexDirection: "row",
    marginLeft: 30,
  },
  EditContainer: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    borderRadius: 100,
    bottom: 8,
    right: 140,
  },
  RedDot: {
    width: 9,
    height: 9,
    backgroundColor: "red",
    borderRadius: 50,
    marginLeft: 15,
    marginTop: -22,
  },
});
