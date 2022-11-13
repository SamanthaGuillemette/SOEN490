import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { ShadowView, View, Text, Icon } from "../../../../components";
import { useThemeColor } from "../../../../hooks";
import styles from "./SettingBox.styles";

interface SettingBoxProps {
  settingName: String;
  iconName: keyof typeof Feather.glyphMap;
}

const SettingBox = (props: SettingBoxProps) => {
  const backgroundSecondary = useThemeColor("backgroundSecondary");
  return (
    <TouchableOpacity>
      <ShadowView
        style={[
          styles.settingBox_container,
          { backgroundColor: backgroundSecondary },
        ]}
      >
        <View style={{ backgroundColor: backgroundSecondary }}>
          <Text variant="body">{props.settingName}</Text>
        </View>
        <Icon name={props.iconName} style={styles.settingIcon} size="small" />
      </ShadowView>
    </TouchableOpacity>
  );
};

export default SettingBox;
