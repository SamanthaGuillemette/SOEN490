import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../constants";

const { width } = Dimensions.get("screen");

export default StyleSheet.create({
    container: {
        flex: 4,
    },
    topContainer: {
        flex: 4.5,
    },
    bottomContainer: {
        flex: 1,
        justifyContent: "flex-end",
        marginLeft: 40,
    },
    skipContainer: {
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    imageContainer: {
        justifyContent: "flex-end",
        width,
        alignItems: "center",
        bottom: 15
    },
    image: {
        width: width - 80,
        height: 300,
        borderRadius: 40,
    },
    onboardingText: {
        width: width - 80,
        color: colors.light.gray200,
        textAlign: 'center'
    },
    pagingDot: {
        width: 7,
        height: 7,
        backgroundColor: "grey",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "grey",
    },
    dotContainer: {
        width: 21,
        padding: 10,
        top: 60,
    },
    skipButton: {
        color: colors.light.gray500,
        padding: 47,
        fontWeight: "bold",
    },
});