import { ScrollView } from "react-native-gesture-handler";
import { View } from "../../../../components";
import LinkBox from "./components/LinkBox.component";
import styles from "./Links.styles";

export const Links = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <LinkBox
            linkName="GitHub Integration"
            description="Description"
            iconName="github"
          />
          <LinkBox
            linkName="Jira Integration"
            description="Description"
            iconName="github"
          />
          <LinkBox
            linkName="Figma Integration"
            description="Description"
            iconName="figma"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Links;
