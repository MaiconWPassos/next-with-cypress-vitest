import { expect, test } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Home from ".";
import { HomeProvider } from "./context/HomeContext";

/**
 * Renderiza pagina juntamente com o Contexto
 * @returns
 */
function renderHomeGreeter() {
  return render(
    <HomeProvider>
      <Home />
    </HomeProvider>
  );
}

/**
 * Garante que a pagina esteja renderizando corretamente
 */
test("home must render", () => {
  const renderPage = renderHomeGreeter();
  const title = screen.getByTestId("home-title");

  expect(title).toBeDefined();

  renderPage.unmount();
});

/**
 * Responsavel por garantir que a funcionalidade da pagina esteja correta
 */
test("when you click on the switch, the light should turn on and when you click again, the light should turn off", () => {
  const renderPage = renderHomeGreeter();

  /**
   * Verifica se os elemetos estão renderizados corretamente
   */
  const toggleLight = screen.getByTestId("toggle-light");
  const lightOff = screen.getByTestId("light-off");

  expect(toggleLight).toBeDefined();
  expect(lightOff).toBeDefined();

  /**
   * Clica no botão de toggle
   */
  toggleLight.click();

  /**
   * Verifica se a luz acendeu
   */
  const lightOn = screen.getByTestId("light-on");
  expect(lightOn).toBeDefined();
  expect(toggleLight.innerHTML).toBe("Light Off");

  /**
   * Clica novamente
   */
  toggleLight.click();

  /**
   * Verifica se a luz apagou
   */
  expect(lightOff).toBeDefined();
  expect(toggleLight.innerHTML).toBe("Light On");

  renderPage.unmount();
});
