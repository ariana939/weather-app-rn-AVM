import React from "react";
import { render } from "@testing-library/react-native";
import PantallaClima from "../src/componentes/contenedor/pantallaClima";

test("muestra el nombre de la ciudad", () => {
  const { getByTestId } = render(<PantallaClima />);

  expect(getByTestId("ciudad")).toBeTruthy();
});