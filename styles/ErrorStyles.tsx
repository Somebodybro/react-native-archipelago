import { COLORS } from "./theme";
import { Create } from "../utils/StyleSheet";

const getErrorStyles = (Colors: COLORS) => {
  return Create({
    container: {
      backgroundColor: Colors.errorBackground,
      flexDirection: "row",
      padding: 5,
      alignItems: "center",
    },
    text: {
      color: Colors.errorText,
      flex: 10,
      verticalAlign: "middle",
      fontSize: 18,
    },
    button: {
      flex: 3,
      paddingVertical: "5%",
    },
    icon: {
      flex: 3,
    },
  });
};

export default getErrorStyles;
