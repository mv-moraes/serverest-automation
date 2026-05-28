import { faker } from "@faker-js/faker";

describe("Frontend - Login", () => {
  it("Deve realizar login com sucesso", () => {
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

    cy.contains("Home").should("be.visible");
  });
});
