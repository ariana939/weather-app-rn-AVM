import React from "react";
import { render } from "@testing-library/react-native";
import PantallaClima from "../src/componentes/contenedor/pantallaClima";

test("renderiza la pantalla principal del clima", () => {
  const { getByTestId } = render(<PantallaClima />);

  expect(getByTestId("screen-weather")).toBeTruthy();
});