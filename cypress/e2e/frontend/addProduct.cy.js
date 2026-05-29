import { faker } from "@faker-js/faker";
describe("Frontend - Adicionar produto", () => {
  it("Deve adicionar produto na lista de compras", () => {
   const nome = faker.person.firstName();
    const email = faker.internet.email().toLowerCase();
    const senha = "senha123";

    //criar usuario via API
    cy.request({
      method: "POST",
      url: "https://serverest.dev/usuarios",
      body: {
        nome: nome,
        email: email,
        password: senha,
        administrador: "false",
      },
    });

    //login via frontend
    cy.login(email, senha);

    cy.contains("Home", {
      timeout: 10000,
    }).should("be.visible");
    
    cy.get("button").contains("Adicionar a lista", {
      timeout: 10000,
    }).first().click();
    
    cy.contains("Lista de Compras").should("be.visible");
  });
});
