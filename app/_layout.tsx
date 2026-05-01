import '@/global.css';

import ProveedorPantallaNegroBlanco from '@/src/pantalla'; 
import StackPrincipal from '@/src/stack';
import { PortalHost } from '@rn-primitives/portal';
export { FeedbackDeErrorPorDefecto as ErrorBoundary } from '@/src/feedbacks';


export default function RootLayout() {

  return (
    <ProveedorPantallaNegroBlanco>
        <StackPrincipal />
        <PortalHost />
    </ProveedorPantallaNegroBlanco>
    
  );
}
