import { View } from "react-native";
import { Text } from "@/components/ui/text";

type CiudadProps = {
  ciudad: string;
};

const Ciudad = ({ ciudad }: CiudadProps) => {
  return (
    <View className="items-center mt-10 py-5">
      <Text testID="ciudad" className="text-4xl font-bold uppercase">
        {ciudad}
      </Text>
    </View>
  );
};

export default Ciudad;