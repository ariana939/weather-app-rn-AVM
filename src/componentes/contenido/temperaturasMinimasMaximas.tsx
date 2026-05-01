import { View } from "react-native";
import { Text } from "@/components/ui/text";

type TemperaturasMinMaxProps = {
  min: number;
  max: number;
};

const TemperaturasMinimaMaxima = ({ min, max }: TemperaturasMinMaxProps) => {
  return (
    <View
      testID="temp-minmax"
      className="flex-row justify-center gap-10 mt-4"
    >
      <Text testID="temp-min" className="text-xl">
        {min}°
      </Text>

      <Text testID="temp-max" className="text-xl">
        {max}°
      </Text>
    </View>
  );
};

export default TemperaturasMinimaMaxima;