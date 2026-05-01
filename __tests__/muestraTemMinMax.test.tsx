import React from "react";
import { render } from "@testing-library/react-native";
import PantallaClima from "../src/componentes/contenedor/pantallaClima";

test("muestra temperatura mínima y máxima", () => {
  const { getByTestId } = render(<PantallaClima />);

  expect(getByTestId("temp-min")).toBeTruthy();
  expect(getByTestId("temp-max")).toBeTruthy();
});