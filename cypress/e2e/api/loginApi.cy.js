import { faker } from "@faker-js/faker";

describe("API - Login", () => {
  it("Deve realizar login com sucesso", () => {
    const nome = faker.person.firstName();
    const email = faker.internet.email().toLowerCase();
    const senha = "123456";

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

    cy.request({
      method: "POST",
      url: "https://serverest.dev/login",
      body: {
        email: email,
        password: senha,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq("Login realizado com sucesso");

      expect(response.body.authorization).to.exist;
    });
  });
});
