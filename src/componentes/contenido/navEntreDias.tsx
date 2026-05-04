import { useState } from "react";
import { Icon } from "@/components/ui/icon";    
import { Text } from "@/components/ui/text";
import { ChevronLeft, ChevronRight } from "lucide-react-native";
import { View, TouchableOpacity } from "react-native"

const formatearFecha = (fecha: Date) => {
  const fecha_con_formato = fecha.toLocaleDateString('es-AR', {
    year: 'numeric',
    day: '2-digit',
    month: '2-digit',
  });
  return fecha_con_formato.replace(`/${fecha.getFullYear()}`, '');
};

const NavEntreDias = ({ hoy, ayer, maniana, indiceDia, setIndiceDia }: { hoy: Date; ayer: Date; maniana: Date; indiceDia: number; setIndiceDia: (value: number) => void }) => {
  const dias = [ayer, hoy, maniana];
  return (
    <View className="flex-row justify-between items-center px-1 py-1">
        <TouchableOpacity 
        testID="button-prev-day" 
        className="flex-row items-center space-x-2 opacity-60" 
        onPress={() => setIndiceDia(indiceDia - 1)}
        disabled={indiceDia === 0}
        >
          <Icon as={ChevronLeft} />
          {indiceDia > 0 && <Text>{formatearFecha(dias[indiceDia - 1])}</Text>}
        </TouchableOpacity>

        <Text testID="navigation-current-day" className="text-2xl opacity-100"> 
          {formatearFecha(dias[indiceDia])}
        </Text>
        
        <TouchableOpacity 
        testID="button-next-day" 
        className="flex-row items-center space-x-2 opacity-60"  
        onPress={() => setIndiceDia(indiceDia + 1)}
        disabled={indiceDia === 2}
        >
          {indiceDia < 2 && <Text>{formatearFecha(dias[indiceDia + 1])}</Text>}
          <Icon as={ChevronRight} />
        </TouchableOpacity>
    </View>
);
};


export default NavEntreDias;
