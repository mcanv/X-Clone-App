import { FontAwesome } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginButtons() {
  return (
    <SafeAreaView className="bg-black relative flex-1">
      <View className="flex items-center justify-center mb-20">
        <Image
          className="w-12 h-12"
          source={require("@assets/images/logo.svg")}
        />
      </View>
      <View className="px-6">
        <Text className="font-MainMedium text-gray-300 text-4xl mb-2">
          Welcome to
        </Text>
        <Text className="font-MainSemiBold text-white text-5xl mb-12">
          X Clone ⚡
        </Text>
        <TouchableOpacity className="w-full h-14 px-6 border flex items-center justify-center flex-row bg-[#4285F4] border-[#4285F4] rounded-full mb-4">
          <FontAwesome name="google" color="#fff" size={30} />
          <Text className="font-MainSemiBold text-xl ml-4 text-white">
            Sign in with Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="w-full h-14 px-6 border flex items-center justify-center flex-row bg-[#303030] border-[#303030] rounded-full mb-6">
          <FontAwesome name="apple" color="#fff" size={30} />
          <Text className="font-MainSemiBold text-xl ml-4 text-white">
            Sign in with Apple
          </Text>
        </TouchableOpacity>
        <View className="flex flex-row gap-8 items-center mb-5">
          <View className="flex-1 h-[1px] bg-gray-600"></View>
          <Text className="text-white text-lg text-center font-MainMedium">
            OR
          </Text>
          <View className="flex-1 h-[1px] bg-gray-600"></View>
        </View>
        <TouchableOpacity className="w-full h-14 px-6 border flex items-center justify-center flex-row bg-black border-gray-700 rounded-full mb-8">
          <Text className="font-MainSemiBold text-xl text-white">
            Create an Account
          </Text>
        </TouchableOpacity>
        <View className="flex flex-row items-center">
          <Text className="text-gray-400 text-lg font-MainRegular">
            Do you have an account?
          </Text>
          <TouchableOpacity
            onPress={() => router.push(`/auth/loginPage`)}
            className="ml-2"
          >
            <Text className="text-white text-lg font-MainSemiBold">Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
