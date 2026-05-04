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
      className="flex-row justify-between gap-10 px-6 opacity-60"
    >
      <Text testID="temp-min" className="text-xl">
        Min:{min}°
      </Text>

      <Text testID="temp-max" className="text-xl">
        Max:{max}°
      </Text>
    </View>
  );
};

export default TemperaturasMinimaMaxima;