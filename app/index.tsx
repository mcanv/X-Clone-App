import { Image } from "expo-image";
import { router } from "expo-router";
import { useEffect } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SplashScreen() {
  useEffect(() => {
    setTimeout(() => {
      router.push(`/auth/loginButtons`);
    }, 1500);
  }, []);

  return (
    <SafeAreaView className="bg-black relative flex-1 items-center justify-center">
      <Image
        className="w-64 h-64"
        source={require("@assets/images/logo.svg")}
      />
      <Text className="absolute text-white font-MainBold bottom-12">
        X Clone | Version v1.0
      </Text>
    </SafeAreaView>
  );
}
