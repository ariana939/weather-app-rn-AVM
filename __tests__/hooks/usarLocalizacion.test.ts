import { renderHook, waitFor } from '@testing-library/react-native';
import * as ExpoLocation from 'expo-location';
import usarLocalizacion from '@/src/hooks/localizacion';

jest.mock('expo-location');

const mockExpoLocation = ExpoLocation as jest.Mocked<typeof ExpoLocation>;

describe('usarLocalizacion', () => {
  it('retorna coordenadas en cero y permiso deshabilitado por defecto', () => {
    mockExpoLocation.requestForegroundPermissionsAsync.mockResolvedValueOnce({ status: 'denied' } as any);

    const { result } = renderHook(() => usarLocalizacion());

    expect(result.current.coordenadas()).toEqual({ latitud: 0, longitud: 0 });
    expect(result.current.coordenadasDisponibles()).toBe(false);
  });

  it('actualiza las coordenadas cuando el permiso es concedido', async () => {
    mockExpoLocation.requestForegroundPermissionsAsync.mockResolvedValueOnce({ status: 'granted' } as any);
    mockExpoLocation.getCurrentPositionAsync.mockResolvedValueOnce({
      coords: { latitude: -34.6037, longitude: -58.3816 },
    } as any);

    const { result } = renderHook(() => usarLocalizacion());

    await waitFor(() => {
      expect(result.current.coordenadasDisponibles()).toBe(true);
    });

    expect(result.current.coordenadas()).toEqual({ latitud: -34.6037, longitud: -58.3816 });
    expect(result.current.coordenadasComoTexto()).toBe('-34.6037,-58.3816');
  });

  it('no actualiza las coordenadas si el permiso es denegado', async () => {
    mockExpoLocation.requestForegroundPermissionsAsync.mockResolvedValueOnce({ status: 'denied' } as any);

    const { result } = renderHook(() => usarLocalizacion());

    await waitFor(() => {
      expect(result.current.coordenadasDisponibles()).toBe(false);
    });

    expect(result.current.coordenadas()).toEqual({ latitud: 0, longitud: 0 });
  });
});