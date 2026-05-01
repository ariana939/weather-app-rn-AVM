import { fireEvent } from "@testing-library/react-native";
import React from "react";
import { render } from "@testing-library/react-native";
import PantallaClima from "../src/componentes/contenedor/pantallaClima";

test("permite cambiar de día", () => {
  const { getByTestId } = render(<PantallaClima />);

  const next = getByTestId("button-next-day");
  const prev = getByTestId("button-prev-day");

  fireEvent.press(next);
  fireEvent.press(prev);

  expect(getByTestId("navigation-current-day")).toBeTruthy();
});