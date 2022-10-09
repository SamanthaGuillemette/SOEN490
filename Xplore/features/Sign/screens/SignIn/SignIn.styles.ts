import { StyleSheet } from "react-native";

export default StyleSheet.create({ 
    container: {
        flex: 1,
      },
      inputsContainer: {
        marginTop: 50,
      },
      inputWrapper: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        padding: 5,
        marginBottom: 35,
        width: 250,
      },
      textInputIcon: {
        width: 24,
        height: 24,
        marginRight: 10,
      },
      login_button: {
        backgroundColor: "#463FB0",
        marginTop: 50,
        width: 250,
        paddingVertical: 16,
        borderRadius: 25,
      },
      forgot_button: {
        width: 250,
        marginTop: 15,
        paddingVertical: 16,
        borderRadius: 25,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#463FB0",
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