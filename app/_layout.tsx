import { Suspense } from "react";
import { useColorScheme } from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider
} from "@react-navigation/native";
import { loadAsync, useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { TamaguiProvider, Text, Theme } from "tamagui";

import { MySafeAreaView } from "../components/MySafeAreaView";
import config from "../tamagui.config";

export default function Layout() {
  const colorScheme = useColorScheme();

  // const [loaded] = useFonts({
  //   Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
  //   InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf")
  // });

  loadAsync({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf")
  });

  // if (!loaded) {
  //   SplashScreen.preventAutoHideAsync();
  // }

  return (
    <TamaguiProvider config={config}>
      <Suspense fallback={<Text>Loading...</Text>}>
        <Theme name={"light"}>
          <ThemeProvider value={DefaultTheme}>
            <MySafeAreaView>
              <Stack
                screenOptions={{
                  headerShown: false
                }}
              />
            </MySafeAreaView>
          </ThemeProvider>
        </Theme>
      </Suspense>
    </TamaguiProvider>
  );
}
