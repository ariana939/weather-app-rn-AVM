import usarPronosticoClimatico from '@/src/hooks/pronosticoClimaticoAPI';
import ProveedorDeDatosClimatico from '@/src/componentes/contenedor/proveedorDeClima';
import { renderHook, waitFor } from '@testing-library/react-native';

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


describe('Yo como usuario, quiero ver el nombre de la ciudad para asegurarme que los datos climaticos estan ligados a mi zona', () => {
  test('El primer dato a visualizar en la aplicación debe ser el nombre de la ciudad: Villa Lugano', async () => {
    const resultado = renderHook(() => usarPronosticoClimatico({
          fecha: new Date(),
          latitud: -30,
          longitud: -60,
          clave_de_api: 'api_key_123',
          indiceDia: 1,
        }),
      {
        wrapper: ProveedorDeDatosClimatico,
      }
    );

    expect(resultado.result.current.ciudad()).toBe('');

    await waitFor(() => {
      expect(resultado.result.current.ciudad()).toEqual('Buenos Aires');
    });
  });
});
