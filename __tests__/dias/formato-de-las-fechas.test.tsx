import { render } from '@testing-library/react-native';

import NavEntreDias from '@/src/componentes/contenido/navEntreDias';

describe('Yo como usuario, deseo navegar entre los dias para conocer predicciones o datos historicos del clima', () => {
  test('Para el 2 de mayo del 2026, deben aparecer 1/05, 2/05 y 3/05 como fechas en la barra de navegación', () => {
    const hoy = new Date('may 02, 2026');
    const ayer = new Date('may 01, 2026');
    const maniana = new Date('may 03, 2026');
    const screen = render(<NavEntreDias 
      hoy={hoy} 
      maniana={maniana} 
      ayer={ayer} 
      indiceDia={1}
      setIndiceDia={() => {}}/>);

    expect(screen.getByText('01/05')).toBeOnTheScreen();
    expect(screen.getByText('02/05')).toBeOnTheScreen();
    expect(screen.getByText('03/05')).toBeOnTheScreen();
  });
});
