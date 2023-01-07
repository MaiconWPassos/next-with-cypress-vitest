/**
 * Responsavel por garantir que a funcionalidade da pagina esteja correta
 */
describe("Home", () => {
  it("must turn the light on and off", () => {
    /**
     * Visita pagina
     */
    cy.visit("/");
    cy.wait(2000);

    /**
     * Verifica se os elemetos estão renderizados corretamente
     */
    const toggleLight = cy.get("[data-testid=toggle-light]");

    /**
     * Clica no botão de toggle
     */
    toggleLight.click();

    const lightOn = cy.get("[data-testid=light-on]");
    cy.wait(2000);
    /**
     * Verifica se alterou texto do toggle e luz acendeu
     */
    toggleLight.contains("Light Off");
    lightOn.and("be.visible");

    toggleLight.click();

    const lightOff = cy.get("[data-testid=light-off]");

    /**
     * Verifica se alterou texto do toggle e luz apagou
     */
    toggleLight.contains("Light On");
    lightOff.and("be.visible");
  });
});
