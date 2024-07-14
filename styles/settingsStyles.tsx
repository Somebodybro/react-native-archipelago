import { COLORS } from "./theme";
import { Create } from "../utils/StyleSheet";

const getSettingsStyles = (Colors: COLORS) => {
  return Create({
    settingsContainer: {
      flex: 1,
      alignItems: "center",
      borderColor: Colors.defaultBorder,
    },
    list: {
      width: "90%",
    },
    item: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 20,
      borderRadius: 1,
      elevation: 2,
      marginBottom: 3,
    },
  });
};
export default getSettingsStyles;
