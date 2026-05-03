import React from "react";
import { render } from "@testing-library/react-native";
import PantallaClima from "../src/componentes/contenedor/pantallaClima";

jest.mock('expo-location', () => ({
  requestForegroundPermissionsAsync: jest.fn(async () => ({
    status: 'granted',
  })),
  getCurrentPositionAsync: jest.fn(async () => ({
    coords: {
      latitude: 10,
      longitude: 20,
    },
  })),
}));
test("renderiza la pantalla principal del clima", () => {
  const { getByTestId } = render(<PantallaClima />);

  expect(getByTestId("screen-weather")).toBeTruthy();
});

