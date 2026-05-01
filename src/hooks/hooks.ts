import { useState } from "react";

export const useWeather = () => {
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

  return {
    ciudad,
    temp,
    min,
    max,
    condicion,
    metricas,
  };
};

