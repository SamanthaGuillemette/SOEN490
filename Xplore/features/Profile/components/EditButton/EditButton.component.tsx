import { Feather } from "@expo/vector-icons";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Icon, ShadowView, Text } from "../../../../components";
import styles from "./EditButton.styles";

interface EditButtonProps extends TouchableOpacityProps {
  iconName: keyof typeof Feather.glyphMap;
  label: string;
}

export const EditButton = (props: EditButtonProps) => {
  const { iconName, label, ...restOfProps } = props;

  return (
    <ShadowView style={styles.container}>
      <TouchableOpacity {...restOfProps} style={styles.buttonContainer}>
        <Icon name={iconName} style={styles.buttonIcon} />
        <Text variant="body" color="bodyText">
          {label}
        </Text>
      </TouchableOpacity>
    </ShadowView>
  );
};
