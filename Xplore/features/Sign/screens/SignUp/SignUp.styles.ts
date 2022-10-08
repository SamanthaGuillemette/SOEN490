import { StyleSheet } from "react-native";

export default StyleSheet.create({ 
    container: {
        flex: 1,
      },
      inputsContainer: {
        marginTop: 20,
      },
      inputWrapper: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#C4C4C4",
        padding: 5,
        marginBottom: 25,
        width: 250,
      },
      textInputIcon: {
        width: 24,
        height: 24,
        marginRight: 10,
      },
      signup_button: {
        backgroundColor: "#463FB0",
        marginTop: 40,
        width: 250,
        paddingVertical: 16,
        borderRadius: 25,
        shadowColor: "#463FB0",
        shadowOpacity: 0.3,
        elevation: 5,
        shadowOffset: {
          width: 0,
          height: 0,
        },
      },
      inputTextStyle: {
        textAlign: "center",
        color: "white",
      },
      inputTextStyleDark: {
        textAlign: "center",
        color: "#463FB0",
      },
});