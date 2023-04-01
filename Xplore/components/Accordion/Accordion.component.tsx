import React, { useState } from "react";
import { Text, View, Icon } from "..";
import { useThemeColor } from "../../hooks";
import {
  LayoutAnimation,
  Platform,
  TouchableOpacity,
  UIManager,
} from "react-native";
import styles from "./Accordion.styles";

const accordionNames = ["About", "Category", "Goals"];

if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export default function Accordion(item: any) {
  let goals = item.item.goals;
  let newGoals = goals.join("\n\n"); // adding new line after each goal

  const [active, setActive] = useState(null);
  return (
    <View backgroundColor="background">
      {[1, 2, 3].map((x, i) => (
        <Item
          key={x}
          active={active}
          i={i}
          setActive={setActive}
          content={[item.item.description, item.item.category, newGoals]}
        />
      ))}
    </View>
  );
}

function Item(props: any) {
  const { i, active, setActive, content } = props;
  const onPress = () => {
    LayoutAnimation.easeInEaseOut();
    setActive(i === active ? null : i);
  };
  const open = active === i;
  const smallText = useThemeColor("smallText");
  return (
    <TouchableOpacity
      style={[styles.accordion, { borderColor: smallText }]}
      onPress={onPress}
      activeOpacity={1}
    >
      <View
        backgroundColor="background"
        style={
          open ? [styles.rowOpen, { borderBottomColor: smallText }] : styles.row
        }
      >
        <Text variant="h4" color="titleText">
          {accordionNames[i]}
        </Text>
        <View>
          {open ? (
            <Icon name="chevron-up" color="smallText" />
          ) : (
            <Icon name="chevron-down" color="smallText" />
          )}
        </View>
      </View>
      {open && (
        <Text style={styles.subItem}>
          {content[i]}
          {"\n"}
        </Text>
      )}
    </TouchableOpacity>
  );
}
