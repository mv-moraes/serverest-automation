Cypress.Commands.add("login", (email, senha) => {
  cy.clearCookies();
  cy.clearLocalStorage();

  cy.visit("https://front.serverest.dev/login");

  cy.get('[data-testid="email"]').should("be.visible").type(email);

  cy.get('[data-testid="senha"]').should("be.visible").type(senha);

  cy.get('[data-testid="entrar"]').click();
});
