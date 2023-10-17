import * as Font from "expo-font";

const useFonts = async () =>
  await Font.loadAsync({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf")
  });

export default useFonts;
