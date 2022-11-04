import { ShadowView, Text } from "../../../../components";

interface ProjectCardLargeProps {
  projectName: string;
  imageURL: string;
  goal: string;
  duration: number;
  members: number;
}

export const ProjectCardLarge = (props: ProjectCardLargeProps) => {
  const { projectName, imageURL, goal, duration, members } = props;

  return (
    <ShadowView>
      <Text>{projectName}</Text>
      <Text>{goal}</Text>
      <Text>{duration} days</Text>
      <Text>{members} members</Text>
      <Text>{imageURL}</Text>
    </ShadowView>
  );
};
