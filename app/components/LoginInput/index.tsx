import { KeyboardType, TextInput, TextInputProps, View } from "react-native";

interface LoginInputProps extends TextInputProps {
  placeholder: string;
  placeholderTextColor: string;
  wrapperClasses?: string | null;
  inputStyles?: string | null;
  keyboardType: KeyboardType;
  secureTextEntry: boolean;
  children?: React.ReactNode;
}

export default function LoginInput({
  placeholder,
  placeholderTextColor,
  wrapperClasses = null,
  inputStyles = null,
  keyboardType = "default",
  secureTextEntry = false,
  children,
  ...props
}: LoginInputProps) {
  return (
    <View
      className={`h-12 mb-4 px-4 flex flex-row items-center bg-black border border-gray-700 rounded-full ${wrapperClasses}`}
    >
      <TextInput
        secureTextEntry={secureTextEntry}
        className={`flex-1 text-white font-MainMedium ${inputStyles}`}
        keyboardType={keyboardType}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        {...props}
      />
      {children}
    </View>
  );
}
