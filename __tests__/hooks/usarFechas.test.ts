import { renderHook } from '@testing-library/react-native';
import { usarFechas } from '@/src/hooks/dias';

describe('usarFechas', () => {
  it('retorna hoy, ayer y mañana correctamente', () => {
    const { result } = renderHook(() => usarFechas());
    const { hoy, ayer, maniana } = result.current.fechas();

    const ahora = new Date();

    expect(hoy.getDate()).toBe(ahora.getDate());
    expect(ayer.getDate()).toBe(ahora.getDate() - 1);
    expect(maniana.getDate()).toBe(ahora.getDate() + 1);
  });

  it('ayer es anterior a hoy, y mañana es posterior', () => {
    const { result } = renderHook(() => usarFechas());
    const { hoy, ayer, maniana } = result.current.fechas();

    expect(ayer.getTime()).toBeLessThan(hoy.getTime());
    expect(maniana.getTime()).toBeGreaterThan(hoy.getTime());
  });
});