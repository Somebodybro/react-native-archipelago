import { StyleSheet, TextStyle, ViewStyle, ImageStyle } from "react-native";

export type styleJsonAttribute =
  | TextStyle
  | ViewStyle
  | ImageStyle
  | { [x: string]: styleJsonAttribute };

export type styleJson = { [x: string]: styleJsonAttribute };

export function Create(styleSheet: styleJson) {
  return StyleSheet.create(styleSheet);
}
