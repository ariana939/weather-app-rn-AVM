import { Icon } from "@/components/ui/icon";    
import { Text } from "@/components/ui/text";
import { ChevronLeft, ChevronRight } from "lucide-react-native";
import { View } from "react-native"

const NavEntreDias = () => {
  return (
    <View className="flex-row justify-between p-4">
        <View className="flex-row items-center space-x-2">
            <Icon as= {ChevronLeft}/>
            <Text>28/04</Text>
        </View>
        <View>
            <Text className="text-2xl font-bold">29/04</Text>
        </View>
        <View className="flex-row items-center space-x-2">
            <Text>30/04</Text>
            <Icon as= {ChevronRight}/>
        </View>
    </View>
);
};

export default NavEntreDias