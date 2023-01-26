import React, { useState } from "react";
import { Text, View, Icon } from "..";
import { useThemeColor } from "../../hooks";
import {
  LayoutAnimation,
  Platform,
  TouchableOpacity,
  UIManager,
} from "react-native";
import styles from "./DropDown.styles";

const dropDownNames = ["About", "Technologies", "Goals"];

const dropDownContent = [
  "About dropdown tab \n",
  "Technologies dropdown tab \n",
  "Goals dropdown tab \n",
];

if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export default function CollapsibleHeader() {
  const [active, setActive] = useState(null);
  return (
    <View backgroundColor="background">
      {[1, 2, 3].map((x, i) => (
        <Item key={x} active={active} i={i} setActive={setActive} />
      ))}
    </View>
  );
}

function Item(props: any) {
  const { i, active, setActive } = props;
  const onPress = () => {
    LayoutAnimation.easeInEaseOut();
    setActive(i === active ? null : i);
  };
  const open = active === i;
  const smallText = useThemeColor("smallText");
  return (
    <TouchableOpacity
      style={[styles.dropDown, { borderColor: smallText }]}
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
          {dropDownNames[i]}
        </Text>
        <View>
          {open ? (
            <Icon name="chevron-up" color="smallText" />
          ) : (
            <Icon name="chevron-down" color="smallText" />
          )}
        </View>
      </View>
      {open && <Text style={styles.subItem}> {dropDownContent[i]} </Text>}
    </TouchableOpacity>
  );
}
