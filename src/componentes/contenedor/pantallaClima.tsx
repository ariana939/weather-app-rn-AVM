import React, { useState } from "react";
import { View } from "react-native";

import Ciudad from "../contenido/ciudad";
import NavEntreDias from "../contenido/navEntreDias";
import IconoGrandeClima from "../contenido/iconoGrandeClima";
import TemperaturaPrincipal from "../contenido/temperaturaPrincipal";
import TemperaturasMinMax from "../contenido/temperaturasMinimasMaximas";
import Metrica from "../contenido/metricas";
import { useWeather } from "@/src/hooks/hooks";
import { usarFechas } from "@/src/hooks/dias";

const PantallaClima = () => {

  const { fechas } = usarFechas()
  const {ciudad, temp, min, max, condicion, metricas} = useWeather();

  return (
    <View testID="screen-weather" className="flex-1 justify-between py-10">
      <NavEntreDias {...fechas()} />
      <Ciudad ciudad={ciudad} />
      <IconoGrandeClima condicion={condicion} />
      <Metrica {...metricas}/>
      <TemperaturaPrincipal temp={temp} />
      <TemperaturasMinMax min={min} max={max} />

    </View>
  );
};

export default PantallaClima;