import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { ShadowView, View, Text, Icon } from "../../../../../../components";
import { useThemeColor } from "../../../../../../hooks";
import styles from "./SettingBox.styles";

interface SettingBoxProps {
  settingName: String;
  iconName: keyof typeof Feather.glyphMap;
  onPress?: any;
}

const SettingBox = ({
  settingName,
  iconName,
  ...restOfProps
}: SettingBoxProps) => {
  const backgroundSecondary = useThemeColor("backgroundSecondary");
  return (
    <TouchableOpacity {...restOfProps}>
      <ShadowView
        style={[
          styles.settingBox_container,
          { backgroundColor: backgroundSecondary },
        ]}
      >
        <View style={{ backgroundColor: backgroundSecondary }}>
          <Text variant="body">{settingName}</Text>
        </View>
        <Icon name={iconName} style={styles.settingIcon} size="small" />
      </ShadowView>
    </TouchableOpacity>
  );
};

export default SettingBox;
