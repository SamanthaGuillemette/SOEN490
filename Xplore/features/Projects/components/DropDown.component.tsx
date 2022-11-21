import React, { useState } from "react";
import { Text, View, Icon, ShadowView } from "../../../components";
import { useThemeColor } from "../../../hooks";
import {
  LayoutAnimation,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  UIManager,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

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
  const backgroundSecondary = useThemeColor("backgroundSecondary");
  return (
    <ShadowView
      style={[
        styles.statusBox_container,
        { backgroundColor: backgroundSecondary },
      ]}
    >
      {[1, 2, 3].map((x, i) => (
        <Item key={x} active={active} i={i} setActive={setActive} />
      ))}
    </ShadowView>
  );
}

function Item({ i, active, setActive }) {
  const onPress = () => {
    LayoutAnimation.easeInEaseOut();
    setActive(i == active ? null : i);
  };
  const open = active == i;
  return (
    <TouchableOpacity
      style={styles.dropDown}
      onPress={onPress}
      activeOpacity={1}
    >
      <View style={styles.row}>
        <Text variant="h4">{dropDownNames[i]}</Text>
        <View>
          {open ? (
            <Icon name="chevron-up" color="gray100" />
          ) : (
            <Icon name="chevron-down" color="gray100" />
          )}
        </View>
      </View>
      {open && <Text style={styles.subItem}> {dropDownContent[i]}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 5,
    width: width,
  },
  dropDown: {
    width: 330,
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 20,
    overflow: "hidden",
    paddingVertical: 10,
    marginBottom: 5,
    backgroundColor: "#ECF0F1",
  },
  subItem: {
    padding: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    color: "white",
  },
});
