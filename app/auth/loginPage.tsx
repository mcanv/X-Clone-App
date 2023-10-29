import { Entypo, Feather } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginInput from "../components/LoginInput";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <SafeAreaView className="bg-black relative flex-1">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{
          flex: 1,
        }}
      >
        <View className="flex px-6 flex-row items-center justify-center mb-10">
          <TouchableOpacity
            onPress={() => router.back()}
            className="h-8 w-8 items-center justify-center"
          >
            <Entypo size={30} color="#fff" name="chevron-left" />
          </TouchableOpacity>
          <View className="flex-1 items-center justify-center">
            <Image
              className="w-12 h-12"
              source={require("@assets/images/logo.svg")}
            />
          </View>
          <TouchableOpacity
            disabled
            className="h-8 w-8 items-center justify-center"
          ></TouchableOpacity>
        </View>
        <View className="px-6">
          <Text className="font-MainSemiBold text-white text-5xl mb-10">
            Log in
          </Text>
          <LoginInput
            placeholder="Your email address"
            placeholderTextColor="#8e8e8e"
            keyboardType="email-address"
            secureTextEntry={false}
          />
          <LoginInput
            placeholder="Password"
            placeholderTextColor="#8e8e8e"
            keyboardType="default"
            secureTextEntry={!showPassword}
          >
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              className="absolute right-4"
            >
              <Feather color="#fff" name="eye" size={20} />
            </TouchableOpacity>
          </LoginInput>
          <TouchableOpacity className="w-full h-14 px-6 border flex items-center justify-center flex-row bg-white border-white rounded-full mb-8">
            <Text className="font-MainSemiBold text-xl text-black">
              Giriş Yap
            </Text>
          </TouchableOpacity>
          <View className="flex flex-row justify-center items-center mb-4">
            <Text className="text-gray-400 text-lg font-MainRegular">
              You don't have an account?
            </Text>
            <TouchableOpacity className="ml-2">
              <Text className="text-white text-lg font-MainSemiBold">
                Register
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex flex-row justify-center items-center">
            <Text className="text-gray-400 text-lg font-MainRegular">
              Do you forgot your password?
            </Text>
            <TouchableOpacity className="ml-2">
              <Text className="text-white text-lg font-MainSemiBold">
                Reset Password
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
