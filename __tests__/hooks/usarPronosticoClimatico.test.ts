import { renderHook, waitFor } from '@testing-library/react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import usarPronosticoClimatico from '@/src/hooks/pronosticoClimaticoAPI';

global.fetch = jest.fn();
const mockFetch = fetch as jest.Mock;

const mockRespuestaApi = {
  location: { name: 'Buenos Aires' },
  current: { pressure_mb: 1013 },
  forecast: {
    forecastday: [
      {
        day: {
          condition: { text: 'Soleado', code: 1000 },
          avghumidity: 60,
          maxwind_kph: 20,
          avgtemp_c: 22,
          mintemp_c: 15,
          maxtemp_c: 28,
        },
        hour: [{ pressure_mb: 1012 }, { pressure_mb: 1014 }],
      },
      {
        day: {
          condition: { text: 'Soleado', code: 1000 },
          avghumidity: 60,
          maxwind_kph: 20,
          avgtemp_c: 22,
          mintemp_c: 15,
          maxtemp_c: 28,
        },
        hour: [{ pressure_mb: 1012 }, { pressure_mb: 1014 }],
      },
    ],
  },
};

const crearWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false, gcTime: 0 } },
  });
  return ({ children }: { children: React.ReactNode }) =>
    React.createElement(QueryClientProvider, { client: queryClient }, children);
};

const parametrosBase = {
  fecha: new Date('2025-01-01'),
  latitud: -34.6,
  longitud: -58.38,
  clave_de_api: 'test-api-key',
  indiceDia: 1,
};

describe('usarPronosticoClimatico', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('retorna valores por defecto mientras está pendiente', () => {
    mockFetch.mockResolvedValue({ json: async () => mockRespuestaApi });

    const { result } = renderHook(() => usarPronosticoClimatico(parametrosBase), {
      wrapper: crearWrapper(),
    });

    expect(result.current.estaPendiente()).toBe(true);
    expect(result.current.consultaExitosa()).toBe(false);
    expect(result.current.ciudad()).toBe('');
  });

  it('retorna los datos del clima correctamente después de la consulta', async () => {
    mockFetch.mockResolvedValue({ json: async () => mockRespuestaApi });

    const { result } = renderHook(() => usarPronosticoClimatico(parametrosBase), {
      wrapper: crearWrapper(),
    });

    await waitFor(() => {
      expect(result.current.consultaExitosa()).toBe(true);
    });

    expect(result.current.ciudad()).toBe('Buenos Aires');
    expect(result.current.condicionClimatica()).toBe('Soleado');
    expect(result.current.temperaturaEnGradosCelsius()).toBe(22);
    expect(result.current.temperaturaMinima()).toBe(15);
    expect(result.current.temperaturaMaxima()).toBe(28);
    expect(result.current.humedadEnPorcentaje()).toBe(60);
    expect(result.current.velocidadDelVientoEnKilometrosPorHora()).toBe(20);
  });

  it('llama al endpoint de historial cuando indiceDia es 0 (ayer)', async () => {
    mockFetch.mockResolvedValue({ json: async () => mockRespuestaApi });

    const { result } = renderHook(
      () => usarPronosticoClimatico({ ...parametrosBase, indiceDia: 0 }),
      { wrapper: crearWrapper() }
    );

    await waitFor(() => {
      expect(result.current.consultaExitosa()).toBe(true);
    });

    expect(mockFetch).toHaveBeenCalledWith(expect.stringContaining('history.json'));
  });

  it('llama al endpoint de forecast cuando indiceDia no es 0', async () => {
    mockFetch.mockResolvedValue({ json: async () => mockRespuestaApi });

    const { result } = renderHook(
      () => usarPronosticoClimatico({ ...parametrosBase, indiceDia: 1 }),
      { wrapper: crearWrapper() }
    );

    await waitFor(() => {
      expect(result.current.consultaExitosa()).toBe(true);
    });

    expect(mockFetch).toHaveBeenCalledWith(expect.stringContaining('forecast.json'));
  });

  it('retorna huboUnProblema en true si la consulta falla', async () => {
    mockFetch.mockRejectedValue(new Error('Error de red'));

    const { result } = renderHook(() => usarPronosticoClimatico(parametrosBase), {
      wrapper: crearWrapper(),
    });

    await waitFor(() => {
      expect(result.current.huboUnProblema()).toBe(true);
    }, { timeout: 3000 });

    expect(result.current.descripcionDelProblema()).toBe('Error de red');
  });
});