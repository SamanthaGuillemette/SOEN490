import { NavigationProp } from "@react-navigation/native";
import { TouchableOpacity, View } from "react-native";
import { Icon } from "../../../../components";
import styles from "./GobackButton.styles";

interface GobackButtonProps {
  navigation: NavigationProp<any>;
}

export const GobackButton = (props: GobackButtonProps) => {
  const { navigation } = props;

  return (
    <View style={styles.backButton}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Icon name="chevron-left" color="primary" />
      </TouchableOpacity>
    </View>
  );
};
