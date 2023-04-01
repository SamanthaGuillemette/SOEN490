import { FlatList } from "react-native";
import { View, SearchBar, SaveButton } from "../../../../components";
import { TopicCard } from "../TopicCard";
import { TopicSelectionHeader } from "../TopicSelectionHeader";
import { NavigationProp } from "@react-navigation/native";
import { categories } from "../../../../constants";
import styles from "./SelectTopics.styles";

interface SelectTopicsProps {
  navigation: NavigationProp<any>;
}

interface TopicCardType {
  id: string;
  name: string;
  image: string;
}

const TopicCards: TopicCardType[] = [
  {
    id: "1",
    name: categories.frontendDev,
    image:
      "https://meadowsideosteopathy.co.uk/wp-content/uploads/2019/12/nicole-wolf-CZ9AjMGKIFI-unsplash-768x512.jpg",
  },
  {
    id: "2",
    name: categories.backendDev,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO3HY7FVQlFhJyuh0fDg_5rfm8dbsKYiHiVQ&usqp=CAU",
  },
  {
    id: "3",
    name: categories.webDev,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXf8uaiSiz8Ja4Ecrdnq3dWA7U-zR0otZEt7G1KHqcFcz18YTe2Sc9yiYWArmWlzXPGJQ&usqp=CAU",
  },
  {
    id: "4",
    name: categories.mobileDev,
    image:
      "https://cdn.sanity.io/images/s7xbv9bz/production/240237dd4b6db2858d650c1e7783b1c6dc095e90-5569x3212.jpg?rect=0,0,5569,3211&w=2560&h=1476&auto=format&fm=webp",
  },
  {
    id: "5",
    name: categories.gameDev,
    image:
      "https://www.chetu.com/img/blogs/game-development-trends/game-development-trends-banner.jpg",
  },
  {
    id: "6",
    name: categories.embeddedSystems,
    image:
      "https://www.electronicsforu.com/wp-contents/uploads/2016/07/1743079040.jpg",
  },
  {
    id: "7",
    name: categories.algorithms,
    image:
      "https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202109/Algorithms.jpg?itok=lcIsBOBQ",
  },
  {
    id: "8",
    name: categories.softwareOptimization,
    image:
      "https://ioe.engin.umich.edu/wp-content/uploads/sites/7/2021/05/Optimization-2200px-1.png",
  },
  {
    id: "9",
    name: categories.security,
    image:
      "https://prod-discovery.edx-cdn.org/media/course/image/188025ff-27aa-4355-882a-507d2cdef797-e9d29e88b32c.small.png",
  },
  {
    id: "10",
    name: categories.blockchain,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQThTglOXmmVev-5vHvHTh4iRDE3NqusVLdeqPDTw8pJ_secXd4Kb5XYp9HVpwP7QalLxc&usqp=CAU",
  },
];

interface TopicCardTypeItem {
  item: TopicCardType;
  index: number;
}

export const SelectTopics = (props: SelectTopicsProps) => {
  const { navigation } = props;
  const renderTopicCards = ({ item, index }: TopicCardTypeItem) => {
    return (
      <TopicCard topicName={item.name} imageURL={item.image} index={index} />
    );
  };

  return (
    <View>
      <FlatList
        data={TopicCards}
        ListHeaderComponent={
          <>
            <TopicSelectionHeader />
            <SearchBar style={styles.searchBar} />
          </>
        }
        ListHeaderComponentStyle={styles.headerComponentStyle}
        ListFooterComponent={
          <SaveButton 
            onPress={() => {
              navigation.navigate("BottomTabNavigator")
            }}
          />
        }
        ListFooterComponentStyle={styles.footerComponentStyle}
        renderItem={renderTopicCards}
        keyExtractor={({ id }) => id}
      />
    </View>
  );
};

export default SelectTopics;
