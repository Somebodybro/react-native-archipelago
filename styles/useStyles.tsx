import { useContext, useEffect, useState } from "react";

import ThemeContext from "./theme";

export const useStyles = (getStyles: Function) => {
  const theme = useContext(ThemeContext);
  const [style, setStyle] = useState(getStyles(theme.theme.colors));

  useEffect(() => {
    console.log("setting styles to align with: ", theme.theme.colors);
    setStyle(getStyles(theme.theme.colors));
  }, [theme]);

  return style;
};
