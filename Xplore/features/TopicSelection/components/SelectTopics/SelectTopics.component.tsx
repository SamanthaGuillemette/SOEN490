import { FlatList } from "react-native";
import { View } from "../../../../components";
import { TopicCard } from "../TopicCard";
import styles from "./SelectTopics.styles";

interface TopicCardType {
    id: string;
    name: string;
    image: string;
}

const TopicCards: TopicCardType[] = [
    {
      id: "1",
      name: "Frontend Development",
      image:
        "https://meadowsideosteopathy.co.uk/wp-content/uploads/2019/12/nicole-wolf-CZ9AjMGKIFI-unsplash-768x512.jpg",
    },
    {
      id: "2",
      name: "Backend Development",
      image:
        "https://cdn.bitbytesoft.com/wp-content/uploads/2022/08/Downloader.la-630c417a981e1.jpg",
    },
    {
      id: "3",
      name: "DS & Algorithms",
      image:
        "https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202109/Algorithms.jpg?itok=lcIsBOBQ",
    },
    {
      id: "4",
      name: "Mobile Development",
      image:
        "https://cdn.sanity.io/images/s7xbv9bz/production/240237dd4b6db2858d650c1e7783b1c6dc095e90-5569x3212.jpg?rect=0,0,5569,3211&w=2560&h=1476&auto=format&fm=webp",
    },
    {
      id: "5",
      name: "Security",
      image:
        "https://blog.bizvibe.com/wp-content/uploads/2020/06/top-10-security-companies.jpg",
    },
];

interface TopicCardTypeItem {
    item: TopicCardType;
    index: number;
}

export const SelectTopics = () => {
    const renderTopicCards = ({ item, index }: TopicCardTypeItem) => {
      return (
        <TopicCard
          topicName={item.name}
          imageURL={item.image}
          index={index}
        />
      );
    };
  
    return (
      <View style={styles.topicCardsContainer}>
        <FlatList
          data={TopicCards}
          renderItem={renderTopicCards}
          keyExtractor={({ id }) => id}
        />
      </View>
    );
};
  
export default SelectTopics;
  

