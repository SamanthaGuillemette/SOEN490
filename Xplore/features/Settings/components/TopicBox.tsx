import { Text, Button, ShadowView } from "../../../components";
import styles from "./EditBox.styles";

const TopicBox = () => {
  return (
    <ShadowView
      style={[styles.Box, { height: 119, width: 325 }]}
      isInnerShadow={false}
    >
      <Text variant="h4" color={"gray100"}>
        Topics of Interests
      </Text>

      <Button
        style={styles.UpdateBtn}
        backgroundColor="backgroundSecondary"
        textColor="primary"
      >
        UPDATE
      </Button>
    </ShadowView>
  );
};

export default TopicBox;
