import { View } from "react-native";
import { Text, Button } from "../../../components";
import { colors } from "../../../constants";
import styles from "./EditBox.styles";

const TopicBox = () => {
  return (
    <View>
      <View style={[styles.Box, { height: 119, width: 325 }]}>
        <Text variant="h4" lightColor={colors.light.gray100}>
          Topics of Interests
        </Text>
      </View>

      <Button
        style={styles.UpdateBtn}
        backgroundColor="backgroundSecondary"
        textColor="primary"
      >
        UPDATE
      </Button>
    </View>
  );
};

export default TopicBox;
