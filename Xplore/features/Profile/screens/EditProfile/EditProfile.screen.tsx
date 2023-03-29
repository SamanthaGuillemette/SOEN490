import { NavigationProp } from "@react-navigation/native";
// import { useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PrimaryButton, Text, TextInput, View } from "../../../../components";
import { GobackButton } from "../../components";
import styles from "./EditProfile.styles";

interface EditProfileProps {
  navigation: NavigationProp<any>;
}

const EditProfile = (props: EditProfileProps) => {
  const { navigation } = props;
  // const [userName, setUserName] = useState<string>("");
  // const [location, setLocation] = useState<string>("");
  // const [email, setEmail] = useState<string>("");

  return (
    <SafeAreaView edges={["top", "left", "right"]} style={styles.safeAreaStyle}>
      <ScrollView>
        <GobackButton navigation={navigation} />

        <View style={styles.container}>
          <View style={styles.textItems}>
            <Text variant="h2">Update Profile</Text>
            <Text variant="body" color="bodyText" style={styles.subTitleText}>
              Update new information below
            </Text>
          </View>

          <TextInput
            placeHolder="Full Name"
            iconName="user"
            onChangeText={() => {}}
          />

          <TextInput
            placeHolder="Location"
            iconName="map-pin"
            onChangeText={() => {}}
          />

          <TextInput
            placeHolder="Email"
            iconName="mail"
            onChangeText={() => {}}
          />

          <PrimaryButton
            label="UPDATE"
            style={styles.primaryButton}
            onPress={() => {}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfile;
