import { StyleSheet, View, Image } from "react-native";

interface SolganProps {}

export const Solgan = ({}: SolganProps) => {
  return (
    <View style={styles.logo_container}>
      <Image style={styles.logo} source={require("../../assets/logo.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
  },
  logo_container: {
    marginTop: 85,
    marginBottom: 5,
    borderRadius: 8,
    backgroundColor: "white",
    // shadowColor: globalTheme.colors.primary,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 5,
  },
});
