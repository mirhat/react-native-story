import { StyleSheet, Platform } from "react-native";
import { Dimensions } from "react-native";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  container: {
    flex: 1
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: null,
    height: Dimensions.get("window").height
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16
  }
});
