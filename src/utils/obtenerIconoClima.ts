import {
  Sun,
  Cloud,
  CloudRain,
} from "lucide-react-native";

type WeatherType = "sunny" | "cloudy" | "rain";

export const getWeatherIcon = (type: WeatherType) => {
  switch (type) {
    case "sunny":
      return Sun;

    case "cloudy":
      return Cloud;

    case "rain":
      return CloudRain;

    default:
      return Sun;
  }
};