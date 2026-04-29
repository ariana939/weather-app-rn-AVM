import React from 'react-native';
import LayoutParaPantallaDelClima from '@/src/clima/layouts';
import NavEntreDias from '@/src/dias';

const PantallaInicialParaElClima = () => {
  return (
    <LayoutParaPantallaDelClima>
      <NavEntreDias />
    </LayoutParaPantallaDelClima>
  );
};

export default PantallaInicialParaElClima;

