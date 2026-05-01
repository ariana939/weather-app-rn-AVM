import { useState } from "react";
import { Icon } from "@/components/ui/icon";    
import { Text } from "@/components/ui/text";
import { ChevronLeft, ChevronRight } from "lucide-react-native";
import { View, TouchableOpacity } from "react-native"

const dias = ["28/04", "29/04", "30/04"];

const NavEntreDias = () => {
  const [index, setIndex] = useState(1);

  const prevDay = () => {
    if (index > 0) setIndex(index - 1);
  };

  const nextDay = () => {
    if (index < dias.length - 1) setIndex(index + 1);
  };
  return (
    <View className="flex-row justify-between items-center px-1 py-1">
        <TouchableOpacity testID="button-prev-day" onPress={prevDay} className="flex-row items-center space-x-2 opacity-60" >
            <Icon as={ChevronLeft} />
            <Text>{dias[index - 1] || ""}</Text>
        </TouchableOpacity>
        <Text testID="navigation-current-day" className="text-2xl opacity-100">{dias[index]}</Text>
        <TouchableOpacity testID="button-next-day" onPress={nextDay} className="flex-row items-center space-x-2 opacity-60">
            <Text>{dias[index + 1] || ""}</Text>
            <Icon as={ChevronRight} />
        </TouchableOpacity>
    </View>
);
};

export default NavEntreDias