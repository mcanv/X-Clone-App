import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function AppLayout() {
  const [fontsLoaded] = useFonts({
    MainBlack: require("@assets/fonts/LeagueSpartan/LeagueSpartan-Black.ttf"),
    MainBold: require("@assets/fonts/LeagueSpartan/LeagueSpartan-Bold.ttf"),
    MainExtraBold: require("@assets/fonts/LeagueSpartan/LeagueSpartan-ExtraBold.ttf"),
    MainExtraLight: require("@assets/fonts/LeagueSpartan/LeagueSpartan-ExtraLight.ttf"),
    MainLight: require("@assets/fonts/LeagueSpartan/LeagueSpartan-Light.ttf"),
    MainMedium: require("@assets/fonts/LeagueSpartan/LeagueSpartan-Medium.ttf"),
    MainRegular: require("@assets/fonts/LeagueSpartan/LeagueSpartan-Regular.ttf"),
    MainSemiBold: require("@assets/fonts/LeagueSpartan/LeagueSpartan-SemiBold.ttf"),
    MainThin: require("@assets/fonts/LeagueSpartan/LeagueSpartan-Thin.ttf"),
  });

  if (!fontsLoaded) {
    return <></>;
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="light" animated translucent />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </SafeAreaProvider>
  );
}
