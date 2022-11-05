import { Avatar } from "react-native-paper";
import { badgeArray } from "../../assets/imageManager";

interface BadgeProps {
  index: number;
}

export const Badge = (props: BadgeProps) => {
  let image = badgeArray[props.index];

  return <Avatar.Image style={[{ marginLeft: 25 }]} size={75} source={image} />;
};

export default Badge;
