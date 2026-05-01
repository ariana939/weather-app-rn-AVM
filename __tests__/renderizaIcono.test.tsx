import React from "react";
import { render } from "@testing-library/react-native";
import PantallaClima from "../src/componentes/contenedor/pantallaClima";

test("renderiza icono climático", () => {
  const { getByTestId } = render(<PantallaClima />);

  expect(getByTestId("icon-weather-sunny")).toBeTruthy();
});