import React from "react";
import { render } from "@testing-library/react-native";
import PantallaClima from "../src/componentes/contenedor/pantallaClima";

test("muestra la temperatura actual", () => {
  const { getByTestId } = render(<PantallaClima />);

  expect(getByTestId("temp-current")).toBeTruthy();
});