import { View } from "react-native";
import { Text } from "@/components/ui/text";

type CiudadProps = {
  ciudad: string;
};

const Ciudad = ({ ciudad }: CiudadProps) => {
  return (
    <View testID="ciudad" className="items-center mt-10">
      <Text className="text-3xl">{ciudad}</Text>
    </View>
  );
};

export default Ciudad;