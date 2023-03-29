import { Avatar } from "react-native-paper";
import { badgeArray } from "../../assets/imageManager";

interface BadgeProps {
  xpLevel: number;
}

export const Badge = (props: BadgeProps) => {
  let image = badgeArray[props.xpLevel];

  return <Avatar.Image style={[{ marginLeft: 25 }]} size={75} source={image} />;
};

export default Badge;
