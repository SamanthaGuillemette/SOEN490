import Member from "./components/Member/Member.component";
import { ScrollView, Platform } from "react-native";
import { View } from "../../../../components";
import styles from "./ProjectMembers.styles";
import { AnimatedFAB } from "react-native-paper";

interface ProjectMembers {}
const ProjectMembers = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Member
            avatar={"https://picsum.photos/200"}
            username={"Josh Lewis"}
            xp={"103,597"}
          />
          <Member
            avatar={"https://picsum.photos/300"}
            username={"Amy Lucas"}
            xp={"103,597"}
          />
          <Member
            avatar={"https://picsum.photos/400"}
            username={"Elva Moore"}
            xp={"103,597"}
          />
          <Member
            avatar={"https://picsum.photos/500"}
            username={"Bernice Lewis"}
            xp={"103,597"}
          />
        </View>
      </ScrollView>
      <AnimatedFAB
        icon={"plus"}
        label={"New Member"}
        extended={false}
        onPress={() => console.log("Pressed")}
        visible={true}
        animateFrom={"left"}
        iconMode={"dynamic"}
        style={{
          position: "absolute",
          bottom: Platform.OS === "ios" ? "15%" : "12%",
          //right: Platform.OS === "ios" ? "10%" : "12%",
          right: 40,
        }}
      />
    </View>
  );
};

export default ProjectMembers;
