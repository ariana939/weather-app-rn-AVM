import { View } from "react-native";
import { Icon } from "@/components/ui/icon";
import { Circle } from "lucide-react-native";
import { getSimpleWeather } from "@/src/utils/obtenerCodigoClima";
import { getWeatherIcon } from "@/src/utils/obtenerIconoClima";

type Props = {
  code: number;
};

const IconoGrandeClima = ({ code }: Props) => {
  const weatherType = getSimpleWeather(code);
  const WeatherIcon = getWeatherIcon(weatherType);

  return (
    <View testID={`icon-weather-${weatherType}`} className="items-center my-10">
      <Icon as={WeatherIcon} size={200} />
    </View>
  );
};

export default IconoGrandeClima;