import React from "react";
import { render } from "@testing-library/react-native";
import PantallaClima from "../src/componentes/contenedor/pantallaClima";

test("renderiza métricas secundarias", () => {
  const { getByTestId } = render(<PantallaClima />);

  expect(getByTestId("metrics-container")).toBeTruthy();
});