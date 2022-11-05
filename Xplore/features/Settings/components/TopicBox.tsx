import { Text, Button, ShadowView } from "../../../components";
import styles from "./EditBox.styles";
import { useThemeColor } from "../../../hooks";

const TopicBox = () => {
  const whiteBackground = useThemeColor("backgroundSecondary");

  return (
    <ShadowView
      style={[
        styles.Box,
        { height: 119, width: 325, backgroundColor: whiteBackground },
      ]}
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
