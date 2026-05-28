import { faker } from "@faker-js/faker";

describe("Frontend - Cadastro", () => {
  it("Deve cadastrar usuário com sucesso", () => {
    const nome = faker.person.fullName();
    const email = faker.internet.email().toLowerCase();
    const senha = "senha123";

    cy.visit("https://front.serverest.dev/cadastrarusuarios");

    cy.get('[data-testid="nome"]').should("be.visible").type(nome);

    cy.get('[data-testid="email"]').should("be.visible").type(email);

    cy.get('[data-testid="password"]').should("be.visible").type(senha);

    cy.get('[data-testid="cadastrar"]').click();

    cy.contains("Cadastro realizado com sucesso", {
      timeout: 1000,
    }).should("be.visible");
  });
});
