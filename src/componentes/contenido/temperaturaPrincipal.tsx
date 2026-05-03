import { View } from "react-native";
import { Text } from "@/components/ui/text";

type TemperaturaPrincipalProps = {
  temp: number;
};

const TemperaturaPrincipal = ({ temp }: TemperaturaPrincipalProps) => {
  return (
    <View className=" items-center mt-5 py-3">
      <Text testID="temp-current" className="text-6xl font-bold">{temp}°</Text>
    </View>
  );
};

export default TemperaturaPrincipal;