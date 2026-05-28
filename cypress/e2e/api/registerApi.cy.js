import { faker } from "@faker-js/faker";

describe("API - Usuários", () => {
  it("Deve cadastrar usuário com sucesso", () => {
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
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq("Cadastro realizado com sucesso");
    });
  });
});
