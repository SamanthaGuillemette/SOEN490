import { Image } from "react-native";
import { Icon, Text, View } from "../../../../components";

interface AllProjectsCardProps {
  item: {
    title: string;
    description: string;
    projectImage: string;
    tasks: number;
    conversation: number;
    members: number;
    progress: number;
  };
}

export const AllProjectsCard = (props: AllProjectsCardProps) => {
  const { item } = props;

  return (
    <View
      backgroundColor="backgroundSecondary"
      style={{
        borderRadius: 8,
        marginBottom: 20,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
      }}
      key={item.title}
    >
      <Image
        source={{ uri: "https://picsum.photos/200" }}
        style={{
          width: 125,
          height: 137,
          borderRadius: 8,
          marginVertical: 4,
          marginLeft: 4,
        }}
      />

      <View style={{ paddingHorizontal: 15 }}>
        <Text variant="h3" color="titleText">
          {item.title}
        </Text>
        <Text
          variant="body"
          color="bodyText"
          lineBreakMode="tail"
          numberOfLines={2}
          style={{ marginBottom: 35 }}
        >
          {item.description}
        </Text>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon name="file-text" size="medium" />
          <Text variant="smBody" color="bodyText">
            12
          </Text>
        </View>
      </View>
    </View>
  );
};
