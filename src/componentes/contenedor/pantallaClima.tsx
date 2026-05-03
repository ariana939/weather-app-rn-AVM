import React, { useState } from "react";
import { View } from "react-native";
import Ciudad from "../contenido/ciudad";
import NavEntreDias from "../contenido/navEntreDias";
import IconoGrandeClima from "../contenido/iconoGrandeClima";
import TemperaturaPrincipal from "../contenido/temperaturaPrincipal";
import TemperaturasMinMax from "../contenido/temperaturasMinimasMaximas";
import Metrica from "../contenido/metricas";
import { usarFechas } from "@/src/hooks/dias";
import { usarLocalizacion } from "@/src/hooks/localizacion";
import { usarPronosticoClimatico } from "@/src/hooks/pronosticoClimaticoAPI";

const PantallaClima = () => {
  const { coordenadas, coordenadasComoTexto, coordenadasDisponibles } = usarLocalizacion();
  const { fechas } = usarFechas()
  const pronostico = usarPronosticoClimatico({
  fecha: fechas().hoy,
  latitud: coordenadas().latitud,
  longitud: coordenadas().longitud,
  clave_de_api: process.env.EXPO_PUBLIC_API_KEY as string,
});


  return (
    <View testID="screen-weather" className="flex-1 justify-between py-10">
      <NavEntreDias {...fechas()} />
      <Ciudad ciudad={pronostico.ciudad()} />
      <IconoGrandeClima condicion={pronostico.condicionClimatica()} />
      <TemperaturaPrincipal temp={pronostico.temperaturaEnGradosCelsius()} />
      <TemperaturasMinMax 
        min={pronostico.temperaturaMinima()} 
        max={pronostico.temperaturaMaxima()}
       />
      <Metrica 
        humedad = {pronostico.humedadEnPorcentaje()}
        presion = {pronostico.presionEnHectopascales()}
        viento = {pronostico.velocidadDelVientoEnKilometrosPorHora()}
      />
    </View>
  );
};

export default PantallaClima;