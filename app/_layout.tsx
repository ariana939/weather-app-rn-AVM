import '@/global.css';

import StackPrincipal from '@/src/componentes/contenedor/stack';
import { PortalHost } from '@rn-primitives/portal';
import ProveedorDeDatosClimatico from '@/src/componentes/contenedor/proveedorDeClima';
export { FeedbackDeErrorPorDefecto as ErrorBoundary } from '@/src/componentes/contenido/feedbacks';


export default function RootLayout() {

  return (
        <ProveedorDeDatosClimatico>
          <StackPrincipal />
          <PortalHost />
        </ProveedorDeDatosClimatico>    
  );
}
