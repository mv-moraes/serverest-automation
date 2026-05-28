describe("Frontend - Login inválido", () => {
  it("Deve exibir mensagem ao informar credenciais inválidas", () => {
    cy.visit("https://front.serverest.dev/login");
    cy.get('[data-testid="email"]')
      .should("be.visible")
      .type("teste@teste.com");

    cy.get('[data-testid="senha"]').should("be.visible").type("senhaerrada");

    cy.get('[data-testid="entrar"]').click();

    cy.contains("Email e/ou senha inválidos", {
      timeout: 10000,
    }).should("be.visible");
  });
});
