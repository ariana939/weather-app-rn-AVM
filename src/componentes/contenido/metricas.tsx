import { View } from "react-native";
import { Text } from "@/components/ui/text";
import { Droplets, Wind, Gauge } from "lucide-react-native";

const Metrica = () => {
  return (
    <View className="mt-6 ml-6">

      <View className="flex-row items-center mb-2">
        <Droplets size={20} color="white" />
        <Text className="ml-2">60 %</Text>
      </View>

      <View className="flex-row items-center mb-2">
        <Gauge size={20} color="white" />
        <Text className="ml-2">1013 hPa</Text>
      </View>

      <View className="flex-row items-center mb-2">
        <Wind size={20} color="white" />
        <Text className="ml-2">12 m/s</Text>
      </View>

    </View>
  );
};

export default Metrica;