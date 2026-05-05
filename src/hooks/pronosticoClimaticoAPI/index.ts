import { useQuery } from '@tanstack/react-query';

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;
export const usarPronosticoClimatico = ({
  fecha,
  latitud,
  longitud,
  indiceDia,
}: {
  fecha: Date;
  latitud: number;
  longitud: number;
  indiceDia: number;
}) => {
  const esAyer = indiceDia === 0;
  const fechaFormateada = fecha.toISOString().split('T')[0];

  const { isPending, isSuccess, isError, error, data } = useQuery({
    queryKey: [indiceDia, fecha.getDate(), fecha.getHours(), latitud.toPrecision(2), longitud.toPrecision(2)],
    queryFn: async () => {
      if (esAyer) {
        const res = await fetch(
          `https://api.weatherapi.com/v1/history.json?key=${API_KEY}&q=${latitud},${longitud}&dt=${fechaFormateada}`
        );
        return await res.json();
      }
      const resultado = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitud},${longitud}&days=2`
      );
      return await resultado.json();
    },
  });

  const diaSeleccionado = 
  isSuccess && data?.forecast?.forecastday
    ? esAyer
      ? data.forecast.forecastday[0]
      : data.forecast.forecastday[indiceDia - 1]
    : null;

  return {
    estaPendiente: () => isPending,
    huboUnProblema: () => isError,
    consultaExitosa: () => isSuccess,
    ciudad: () => {
      if (!isSuccess) return "";
      return data.location.name;
    },
    condicionClimatica: () => diaSeleccionado ? diaSeleccionado.day.condition.text : '',
    codigoClima: () => diaSeleccionado ? diaSeleccionado.day.condition.code : 0,
    humedadEnPorcentaje: () => diaSeleccionado ? diaSeleccionado.day.avghumidity : 0,
    presionEnHectopascales: () => esAyer
      ? (() => {
          const horas = diaSeleccionado?.hour ?? [];
          const promedio =
            horas.length > 0
              ? horas.reduce((acc: number, h: { pressure_mb: number }) => acc + h.pressure_mb, 0) / horas.length
              : 0;
           return Math.round(promedio);
        })()
      : data?.current?.pressure_mb ?? 0,

    velocidadDelVientoEnKilometrosPorHora: () => diaSeleccionado ? diaSeleccionado.day.maxwind_kph : 0,
    temperaturaEnGradosCelsius: () => diaSeleccionado ? diaSeleccionado.day.avgtemp_c : 0,
    temperaturaMinima: () => diaSeleccionado ? diaSeleccionado.day.mintemp_c : 0,
    temperaturaMaxima: () => diaSeleccionado ? diaSeleccionado.day.maxtemp_c : 0,
    descripcionDelProblema: () => (isError ? (error as Error).message : ''),

    pronostico: () =>
      diaSeleccionado
        ? {
            condicion_climatica: diaSeleccionado.day.condition.text,
            codigo_clima: diaSeleccionado.day.condition.code,
            humedad_en_porcentaje: diaSeleccionado.day.avghumidity,
            presion_en_hectopascales: esAyer
              ? (() => {
                  const horas = diaSeleccionado?.hour ?? [];
                  return horas.length > 0
                    ? horas.reduce((acc: number, h: { pressure_mb: number }) => acc + h.pressure_mb, 0) / horas.length
                    : 0;
                })()
              : data?.current?.pressure_mb ?? 0,

            velocidad_del_viento_en_kilometros_por_hora: diaSeleccionado.day.maxwind_kph,
            temperatura_en_grados_celsius: diaSeleccionado.day.avgtemp_c,
            temperatura_minima: diaSeleccionado.day.mintemp_c,
            temperatura_maxima: diaSeleccionado.day.maxtemp_c,
          }
        : null,
  };
};

export default usarPronosticoClimatico;