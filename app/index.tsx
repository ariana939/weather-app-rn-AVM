import React from 'react';
import LayoutParaPantallaDelClima from '@/src/clima/layouts';
import NavEntreDias from '@/src/componentes/contenido/navEntreDias';
import Ciudad from '@/src/componentes/contenido/ciudad';
import Temperatura from '@/src/componentes/contenido/temperatura';
import IconoGrandeClima from '@/src/componentes/contenido/iconoGrandeClima';
import Metrica from '@/src/componentes/contenido/metricas';

const PantallaInicialParaElClima = () => {
  return (
    <LayoutParaPantallaDelClima>
      <NavEntreDias />

      <Ciudad />
      <IconoGrandeClima />  
      <Metrica />

      <Temperatura /> 

    </LayoutParaPantallaDelClima>
  );
};

export default PantallaInicialParaElClima;

