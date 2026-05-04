export const getSimpleWeather = (
  code: number
): "sunny" | "cloudy" | "rain" => {
  if (code === 1000) return "sunny";

  if ([1003, 1006, 1009].includes(code)) return "cloudy";

  if ([1080, 1083, 1086, 1089].includes(code)) return "rain";

  return "sunny";
};