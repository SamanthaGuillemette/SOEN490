import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { colors } from "../../constants";
import { useThemeColor } from "../../hooks";
import { StyleProp, ViewStyle } from "react-native";

interface PickerProps {
  label: string;
  options: { label: string; value: string }[];
  onValueChange: (value: string) => void;
  itemStyle?: object;
  style?: StyleProp<ViewStyle>;
}

export const DropdownField = (props: PickerProps) => {
  const [selectedValue, setSelectedValue] = useState("");
  const { label, options, onValueChange, style, itemStyle } = props;
  const bodyText = useThemeColor("bodyText");
  const background = useThemeColor("primaryBackgroundOpaque");

  return (
    <>
      <Picker
        selectedValue={selectedValue}
        style={[style, { color: bodyText, backgroundColor: background }]}
        itemStyle={itemStyle}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedValue(itemValue);
          onValueChange(itemValue);
        }}
      >
        {options.map((option) => (
          <Picker.Item
            key={option.value}
            label={option.label}
            value={option.value}
          />
        ))}
      </Picker>
    </>
  );
};

export default DropdownField;
