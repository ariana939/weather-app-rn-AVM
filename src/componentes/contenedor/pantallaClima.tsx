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
  const { coordenadas } = usarLocalizacion();
  const { fechas } = usarFechas()
  const { hoy, ayer, maniana } = fechas();
  const [indiceDia, setIndiceDia] = useState(1);
  const fechaSeleccionada = indiceDia === 0 ? ayer : indiceDia === 1 ? hoy : maniana;
  const pronostico = usarPronosticoClimatico({
  fecha: fechaSeleccionada,
  latitud: coordenadas().latitud,
  longitud: coordenadas().longitud,
  clave_de_api: process.env.EXPO_PUBLIC_API_KEY as string,
  indiceDia: indiceDia, 
});

  return (
    <View testID="screen-weather" className="flex-1 justify-between py-10">
      <NavEntreDias 
        hoy={hoy} 
        ayer={ayer} 
        maniana={maniana} 
        indiceDia={indiceDia} 
        setIndiceDia={setIndiceDia}
      />
      <Ciudad ciudad={pronostico.ciudad()} />
      <IconoGrandeClima code={pronostico.codigoClima()} />
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