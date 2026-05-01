import React, { useState } from "react";
import { View } from "react-native";

import Ciudad from "../contenido/ciudad";
import NavEntreDias from "../contenido/navEntreDias";
import IconoGrandeClima from "../contenido/iconoGrandeClima";
import TemperaturaPrincipal from "../contenido/temperaturaPrincipal";
import TemperaturasMinMax from "../contenido/temperaturasMinimasMaximas";
import Metrica from "../contenido/metricas";

const PantallaClima = () => {

  const [ciudad] = useState("Buenos Aires");
  const [temp] = useState(24);
  const [min] = useState(22);
  const [max] = useState(26);
  const [condicion] = useState<"sunny" | "cloudy" | "rain">("sunny");
  const [metricas] = useState({
    humedad: 60,
    presion: 1013,
    viento: 12,
  });

  return (
    <View testID="screen-weather" className="flex-1 items-center justify-center">
      <NavEntreDias />
      <Ciudad ciudad={ciudad} />
      <IconoGrandeClima condicion={condicion} />

      <Metrica
        humedad={metricas.humedad}
        presion={metricas.presion}
        viento={metricas.viento}
      />
      <TemperaturaPrincipal temp={temp} />
      <TemperaturasMinMax min={min} max={max} />

    </View>
  );
};

export default PantallaClima;