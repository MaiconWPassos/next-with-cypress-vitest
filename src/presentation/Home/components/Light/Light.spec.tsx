import { render, screen } from "@testing-library/react";
import { expect, fn, test } from "vitest";
import Light from ".";
import { HomeContext, HomeContextData } from "../../context/HomeContext";

/**
 * Renderiza componente juntamente com o Contexto
 * @param state definne valor inicial do contexto
 * @returns
 */
function renderLightGreeter(state: HomeContextData) {
  return render(
    <HomeContext.Provider value={state}>
      <Light />
    </HomeContext.Provider>
  );
}

/**
 * Garante que a luz acesa seja renderizada
 */
test("<Light/>  light must be on", () => {
  const renderComponent = renderLightGreeter({
    lightOn: true,
    setLightOn: fn(),
  });

  const light = screen.getByTestId("light-on");

  expect(light).toBeDefined();

  renderComponent.unmount();
});

/**
 * Garante que a luz apagada seja renderizada
 */
test("<Light/> light must be off", () => {
  const renderComponent = renderLightGreeter({
    lightOn: false,
    setLightOn: fn(),
  });

  const light = screen.getByTestId("light-off");

  expect(light).toBeDefined();
  renderComponent.unmount();
});
