import { FontAwesome } from "@expo/vector-icons"; // Version can be specified in package.json
import React, { ReactNode, useContext } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Linking,
  Image,
  StyleSheet,
} from "react-native";

import ThemeContext, { COLORS } from "../styles/theme";
import { useStyles } from "../styles/useStyles";
import { Create } from "../utils/StyleSheet";

export default function APLicense() {
  const styles = useStyles(getStyles);
  const Colors = useContext(ThemeContext).theme.colors;
  return (
    <View>
      <View style={styles.cardShadow}>
        <View style={styles.card}>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://github.com/ArchipelagoMW/Archipelago")
            }
          >
            <Image
              source={require("../assets/color-icon.png")}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("http://creativecommons.org/licenses/by-nc/4.0/")
            }
            style={styles.item}
          >
            <View style={{ maxWidth: "90%" }}>
              <Text style={styles.name}>
                The Archipelago logo © 2022 by Krista Corkos and Christopher
                Wilson
              </Text>
              <Link
                style={styles.text}
                url="http://creativecommons.org/licenses/by-nc/4.0/"
              >
                Attribution-NonCommercial 4.0 International
              </Link>
            </View>
            <FontAwesome
              style={{ alignSelf: "center" }}
              color={Colors.divider}
              size={16}
              name="chevron-right"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const Link = ({
  url,
  style,
  children,
}: {
  url: string;
  style: object;
  children?: ReactNode | ReactNode[];
}) => (
  <Text
    style={style}
    numberOfLines={1}
    onPress={() => url && Linking.openURL(url)}
  >
    {children}
  </Text>
);

const getStyles = (Colors: COLORS) => {
  return Create({
    card: {
      borderRadius: 4,
      maxHeight: 150,
      overflow: "hidden",
      flexDirection: "row",
      backgroundColor: Colors.background,
      alignItems: "stretch",
    },
    cardShadow: {
      marginHorizontal: 12,
      marginVertical: 6,
      shadowColor: Colors.shadow,
      shadowOpacity: 0.4,
      shadowOffset: { width: 0, height: 0 },
      shadowRadius: 2,
    },
    item: {
      paddingVertical: 16,
      paddingHorizontal: 12,
      flex: 1,
      justifyContent: "space-between",
      flexDirection: "row",
      backgroundColor: "transparent",
      maxWidth: "100%",
      flexWrap: "wrap",
    },
    name: {
      fontWeight: "bold",
      fontSize: 16,
    },
    image: {
      width: 96,
      maxWidth: 96,
      maxHeight: 96,
      flex: 1,
      borderRadius: 0,
      resizeMode: "contain",
    },

    text: {
      color: "#34495e",
      marginTop: 3,
    },
  });
};
