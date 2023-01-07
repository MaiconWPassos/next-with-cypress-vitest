import { render, screen } from "@testing-library/react";
import { expect, fn, test } from "vitest";
import Light from ".";
import { HomeContext, HomeContextData } from "../../context/HomeContext";

/**
 * Renderiza componente juntamente com o Contexto
 * @param state definne valor inicial do contexto
 * @returns
 */
function renderLightSwitchGreeter(state: HomeContextData) {
  return render(
    <HomeContext.Provider value={state}>
      <Light />
    </HomeContext.Provider>
  );
}

/**
 * Garante que botão de toggle renderize corretamente e esteje com label correto
 */
test("<LightSwitch/> toggle should show text on when light off", () => {
  const renderComponent = renderLightSwitchGreeter({
    lightOn: false,
    setLightOn: fn(),
  });

  const toggleLight = screen.getByTestId("toggle-light");

  expect(toggleLight.innerHTML).toBe("Light On");

  renderComponent.unmount();
});

test("<LightSwitch/> toggle should show text off when light On", () => {
  const renderComponent = renderLightSwitchGreeter({
    lightOn: true,
    setLightOn: fn(),
  });

  const toggleLight = screen.getByTestId("toggle-light");

  expect(toggleLight.innerHTML).toBe("Light Off");

  renderComponent.unmount();
});
