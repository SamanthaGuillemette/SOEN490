import { ImageBackground, View as RNView } from "react-native";
import { Icon, ShadowView, Text, View } from "../../../../components";
import styles from "./ProjectCardLarge.styles";
import { TouchableOpacityProps } from "react-native";

interface ProjectCardLargeProps extends TouchableOpacityProps {
  projectName: string;
  imageURL: string;
  goal: string;
  duration: number;
  members: number;
}

export const ProjectCardLarge = (props: ProjectCardLargeProps) => {
  const { projectName, imageURL, goal, duration, members, ...restOfProps } =
    props;

  return (
    <ShadowView backgroundColor="primary" style={styles.container}>
      <ImageBackground
        source={{ uri: `${imageURL}` }}
        imageStyle={styles.imageBgContainer}
      >
        <View style={styles.thirdContainer}>
          <RNView style={styles.overlay} />

          <Text
            variant="h3"
            style={[styles.whiteText, styles.projectName]}
            {...restOfProps}
          >
            {projectName}
          </Text>

          <View style={styles.textIconLine}>
            <Icon name="award" color="white" />
            <Text
              {...restOfProps}
              variant="smBody"
              style={[styles.whiteText, styles.textContent]}
            >
              {goal}
            </Text>
          </View>

          <View style={styles.textIconLine}>
            <Icon name="clock" color="white" />
            <Text
              {...restOfProps}
              variant="smBody"
              style={[styles.whiteText, styles.textContent]}
            >
              {duration} {duration === 1 ? "day" : "days"} left
            </Text>
          </View>

          <View style={styles.textIconLine}>
            <Icon name="users" color="white" />
            <Text
              {...restOfProps}
              variant="smBody"
              style={[styles.whiteText, styles.textContent]}
            >
              {members} members
            </Text>
          </View>
        </View>
      </ImageBackground>
    </ShadowView>
  );
};
