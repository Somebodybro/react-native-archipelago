import { COLORS } from "./theme";
import { Create } from "../utils/StyleSheet";

const getChatStyles = (Colors: COLORS) => {
  return Create({
    chat: {
      flexDirection: "column",
      flex: 1,
      flexWrap: "nowrap",
      rowGap: 10,
      margin: 5,
    },
    message: {
      flex: 1,
      color: Colors.text,
    },
    chatBox: {
      flex: 1,
    },
    chatInputBox: {
      flexDirection: "row",
      marginBottom: 5,
      marginRight: 5,
    },
  });
};
export default getChatStyles;
