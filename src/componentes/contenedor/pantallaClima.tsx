import React, { useState } from "react";
import { View, Text } from "react-native";

import Ciudad from "../contenido/ciudad";
import NavEntreDias from "../contenido/navEntreDias";
import IconoGrandeClima from "../contenido/iconoGrandeClima";
import TemperaturaPrincipal from "../contenido/temperaturaPrincipal";
import TemperaturasMinMax from "../contenido/temperaturasMinimasMaximas";
import Metrica from "../contenido/metricas";
import { useWeather } from "@/src/hooks/hooks";
import { usarFechas } from "@/src/hooks/dias";
import { usarLocalizacion } from "@/src/hooks/localizacion";
import { usarPronosticoClimatico } from "@/src/hooks/pronosticoClimatico";

const PantallaClima = () => {
  const { coordenadas, coordenadasComoTexto, coordenadasDisponibles } = usarLocalizacion();
  const { fechas } = usarFechas()
  const {ciudad, temp, min, max, condicion, metricas} = useWeather();

  return (
    <View testID="screen-weather" className="flex-1 justify-between py-10">
      <NavEntreDias {...fechas()} />
      <View>{coordenadasDisponibles() && (
        <TarjetaParaDatosClimaticos
          fecha={fechas().hoy}
          latitud={coordenadas().latitud}
          longitud={coordenadas().longitud}
          clave_de_api={process.env.EXPO_PUBLIC_API_KEY as string}       
        />
      )}</View>
      <Ciudad ciudad={ciudad} />
      <IconoGrandeClima condicion={condicion} />
      <Metrica {...metricas}/>
      <TemperaturaPrincipal temp={temp} />
      <TemperaturasMinMax min={min} max={max} />

    </View>
  );
};


const TarjetaParaDatosClimaticos = (props: Parameters<typeof usarPronosticoClimatico>[0]) => {
  const { ciudad, temperaturaEnGradosCelsius } = usarPronosticoClimatico(props);
  return (
    <View>
      <Text className="text-6xl">Ciudad: {ciudad()}</Text>
      <Text className="text-6xl">Temperatura: {temperaturaEnGradosCelsius()}</Text>
    </View>
  );
};

export default PantallaClima;