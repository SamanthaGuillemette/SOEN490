import { ShadowView, View, Icon } from "../../../../../../components";
import styles from "./EditImage.styles";
import { TouchableOpacity } from "react-native";

export const EditImage = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <ShadowView style={styles.circle}>
          <Icon name="image" size="x-large" style={styles.alignImage} />
        </ShadowView>
      </TouchableOpacity>
    </View>
  );
};
