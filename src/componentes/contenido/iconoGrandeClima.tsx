import { View } from "react-native";
import { Icon } from "@/components/ui/icon";
import { Circle } from "lucide-react-native";

type IconoProps = {
  condicion?: "sunny" | "cloudy" | "rain";
};

const IconoGrandeClima = ({ condicion = "sunny" }: IconoProps) => {
  return (
    <View testID={`icon-weather-${condicion}`} className="items-center my-10">
      <Icon as={Circle} size={250} />
    </View>
  );
};

export default IconoGrandeClima;