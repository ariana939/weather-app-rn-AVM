import '@/global.css';

//import ProveedorPantallaNegroBlanco from '@/src/pantalla'; 
import StackPrincipal from '@/src/componentes/contenedor/stack';
import { PortalHost } from '@rn-primitives/portal';
import ProveedorDeDatosClimatico from '@/src/componentes/contenedor/proveedorDeClima';
export { FeedbackDeErrorPorDefecto as ErrorBoundary } from '@/src/componentes/contenido/feedbacks';


export default function RootLayout() {

  return (
 //   <ProveedorPantallaNegroBlanco>
        <ProveedorDeDatosClimatico>
          <StackPrincipal />
          <PortalHost />
        </ProveedorDeDatosClimatico>
 //   </ProveedorPantallaNegroBlanco>
    
  );
}
