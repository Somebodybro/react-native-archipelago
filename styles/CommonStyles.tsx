import { COLORS } from "./theme";
import { Create } from "../utils/StyleSheet";

const getCommonStyles = (Colors: COLORS) => {
  return Create({
    textInput: {
      minWidth: "50%",
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    inputLabel: {
      fontSize: 20,
    },
    touchableHighlightButton: {
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: Colors.buttonDefault,
    },
    touchableHighlightButtonText: {
      fontSize: 12,
      lineHeight: 21,
      fontWeight: "bold",
      letterSpacing: 0.25,
      color: Colors.buttonTextDefault,
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: Colors.background,
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      alignContent: "center",
      shadowColor: Colors.shadow,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
    },
    modalButtonContainer: {
      flexDirection: "row",
      justifyContent: "center",
    },
  });
};
export default getCommonStyles;
