import React, { useState } from "react";
import {
  View,
  Modal,
  TouchableOpacity,
  ScrollView,
  TextInputProps as RNTextInputProps,
} from "react-native";
import { useThemeColor } from "../../hooks";
import { Text } from "../Text";
import { ShadowView } from "../ShadowView";
import styles from "./CategoryModal.style";
import { SafeAreaView } from "react-native-safe-area-context";

interface CategoryModalProps extends RNTextInputProps {
  label: string;
  options: { label: string; value: string }[];
  onValueChange: (value: string) => void;
  style?: object;
  selectedValue?: string;
}

export const CategoryModal = (props: CategoryModalProps) => {
  const { label, options, onValueChange, style, selectedValue } = props;
  const [modalVisible, setModalVisible] = useState(false);
  const backgroundColor = useThemeColor("primaryBackgroundOpaque");
  const modalBackgroundColor = useThemeColor("background");

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
        <Text style={styles.labelText} color="bodyText">
          {label}
        </Text>

        <Text color="bodyText" variant="body">
          {selectedValue}
        </Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <SafeAreaView
          edges={["top"]}
          style={[
            styles.mainContainer,
            { backgroundColor: modalBackgroundColor },
          ]}
        >
          <ShadowView style={styles.shadowView}>
            <View style={{ flex: 1 }}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.closeText} variant="h3">
                  CLOSE
                </Text>
              </TouchableOpacity>
              <ScrollView style={styles.scrollView} persistentScrollbar={true}>
                {options.map((option) => (
                  <TouchableOpacity
                    key={option.value}
                    onPress={() => handleValueChange(option.value)}
                  >
                    <Text
                      variant="body"
                      color="bodyText"
                      style={styles.optionText}
                    >
                      {option.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </ShadowView>
        </SafeAreaView>
      </Modal>
    </View>
  );
};
