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
    <View testID="metrics-container" className="mt-1 ml-5">

      <View testID="metric-item-humedad" className="flex-row items-center mb-2">
        <Droplets size={20}/>
        <Text testID="metric-humidity-value" className="ml-2">{humedad} %</Text>
      </View>
    
      <View testID="metric-item-presion" className="flex-row items-center mb-2">
        <Gauge size={20} />
        <Text testID="metric-presion-value" className="ml-2">{presion} hPa</Text>
      </View>

      <View testID="metric-item-viento" className="flex-row items-center mb-2">
        <Wind size={20} />
        <Text testID="metric-viento-value" className="ml-2">{viento} m/s</Text>
      </View>

    </View>
  );
};

export default Metrica;