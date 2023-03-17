import React, { useState } from "react";
import { View, Modal, TouchableOpacity } from "react-native";
import { useThemeColor } from "../../hooks";
import { Text } from "../Text";

interface DropdownProps {
  label: string;
  options: { label: string; value: string }[];
  onValueChange: (value: string) => void;
  style?: object;
  selectedValue?: string;
}

export const DropdownField = (props: DropdownProps) => {
  const { label, options, onValueChange, style, selectedValue } = props;
  const [modalVisible, setModalVisible] = useState(false);
  const backgroundColor = useThemeColor("primaryBackgroundOpaque");

  const handleValueChange = (value: string) => {
    setModalVisible(false);
    onValueChange(value);
  };

  return (
    <View style={style}>
      <TouchableOpacity
        style={[style, { backgroundColor: backgroundColor }]}
        onPress={() => setModalVisible(true)}
      >
        <Text color="bodyText">{label}</Text>

        <Text color="bodyText" variant="body">
          {selectedValue}
        </Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType="slide">
        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={[style, { textAlign: "center", marginTop: 10 }]}>
              Close
            </Text>
          </TouchableOpacity>
          {options.map((option) => (
            <TouchableOpacity
              key={option.value}
              onPress={() => handleValueChange(option.value)}
            >
              <Text
                variant="body"
                color="bodyText"
                style={[style, { textAlign: "center" }]}
              >
                {option.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>
    </View>
  );
};
