import { View } from "react-native";
import { Text } from "@/components/ui/text";
import { Droplets, Wind, Gauge } from "lucide-react-native";

type MetricasProps = {
  humedad: number;
  presion: number;
  viento: number;
};

const Metrica = ({
  humedad,
  presion,
  viento,
}: MetricasProps) => {
  return (
    <View testID="metrics-container" className=" flex-row justify-around gap-2 px-4 mt-2">

      <View testID="metric-item-humedad" className="items-center  bg-gray-100 p-3 rounded-xl mb-2">
        <Droplets size={20}/>
        <Text testID="metric-humidity-value" className="text-lg font-semibold mt-1">{humedad} %</Text>
          <Text className="text-xs text-gray-500">Humedad</Text>
      </View>
    
      <View testID="metric-item-presion" className="items-center bg-gray-100 p-3 rounded-xl mb-2">
        <Gauge size={20} />
        <Text testID="metric-presion-value" className="text-lg font-semibold mt-1">{presion} hPa</Text>
        <Text className="text-xs text-gray-500">Presión</Text>
      </View>

      <View testID="metric-item-viento" className="items-center bg-gray-100  p-3 rounded-xl mb-2">
        <Wind size={20} />
        <Text testID="metric-viento-value" className="text-lg font-semibold mt-1">{viento} m/s</Text>
        <Text className="text-xs text-gray-500">Viento</Text>
      </View>

    </View>
  );
};

export default Metrica;