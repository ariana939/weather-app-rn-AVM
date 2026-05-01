import { View } from "react-native";
import { Icon } from "@/components/ui/icon";
import { Sun } from "lucide-react-native";

const IconoGrandeClima = () => {
  return (
    <View className="items-center my-10">
      <Icon as={Sun} size={200} />
    </View>
  );
};

export default IconoGrandeClima;