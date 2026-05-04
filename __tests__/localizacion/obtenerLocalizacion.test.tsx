import usarLocalizacion from '@/src/hooks/localizacion';
import { renderHook, waitFor } from '@testing-library/react-native';

jest.mock('expo-location', () => {
  const obtenerLocalizacionActualFalsa = jest.fn(async () => {
    await new Promise((resolve) => setTimeout(resolve, 100));
    return { coords: { latitude: 10, longitude: 20 } };
  });

  const solicitarPermisosDeLocalizacionFalsa = jest.fn(async () => {
    await new Promise((resolve) => setTimeout(resolve, 100));
    return { status: 'granted' };
  });

  return {
    requestForegroundPermissionsAsync: solicitarPermisosDeLocalizacionFalsa,
    getCurrentPositionAsync: obtenerLocalizacionActualFalsa,
  };
});

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        location: {
          name: 'Buenos Aires',
        },
        current: {
          pressure_mb: 1027.0,
        },
        forecast: {                         
          forecastday: [
            {
              day: {
                condition: { text: 'Clear', code: 1000 },
                avghumidity: 93,
                maxwind_kph: 6.1,
                avgtemp_c: 9.2,
                mintemp_c: 7.0,
                maxtemp_c: 12.0,
              },
              hour: [],
            },
            {
              day: {
                condition: { text: 'Clear', code: 1000 },
                avghumidity: 93,
                maxwind_kph: 6.1,
                avgtemp_c: 9.2,
                mintemp_c: 7.0,
                maxtemp_c: 12.0,
              },
              hour: [],
            },
          ],
        },
      }),
  })
) as jest.Mock;

describe('Yo como usuario quiero visualizar los datos del clima de la fecha para saber como vestirme ', () => {
  test('Es posible obtener las coordendas geograficas de mi localizacion', async () => {
    const resultado = renderHook(() => usarLocalizacion());

    expect(resultado.result.current.coordenadas()).toEqual({
      latitud: 0,
      longitud: 0,
    });

    await waitFor(() => {
      expect(resultado.result.current.coordenadas()).toEqual({
        latitud: 10,
        longitud: 20,
      });
    });
  });
});
