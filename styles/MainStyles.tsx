import { COLORS, defaultThemes } from "./theme";
import { Create } from "../utils/StyleSheet";

const defaultColors = defaultThemes.lightMode.colors;
const getMainStyles = (Colors: COLORS = defaultColors) => {
  return Create({
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.background,
      alignItems: "center",
      height: "100%",
    },
    connectionContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      borderColor: Colors.defaultBorder,
    },
  });
};
export default getMainStyles;
