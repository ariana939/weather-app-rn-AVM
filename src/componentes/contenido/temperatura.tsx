import { View } from "react-native";
import { Text } from "@/components/ui/text";

const Temperatura = () => {
  return (
    <View className="flex-row justify-center items-end mt-10">

      <Text className="text-xl mr-20">22°</Text>

      <Text className="text-6xl font-bold">24°</Text>

      <Text className="text-xl ml-20">26°</Text>

    </View>
  );
};

export default Temperatura;