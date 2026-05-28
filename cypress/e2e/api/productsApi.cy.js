import { faker } from "@faker-js/faker";

describe("API - Login", () => {
  it("Deve cadastrar produto com sucesso", () => {
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
        administrador: "true",
      },
    });

    cy.request({
      method: "POST",
      url: "https://serverest.dev/login",
      body: {
        email: email,
        password: senha,
      },
    }).then((loginResponse) => {
      const token = loginResponse.body.authorization;

      cy.request({
        method: "POST",
        url: "https://serverest.dev/produtos",
        headers: {
          Authorization: token,
        },
        body: {
          nome: `Produto ${faker.number.int(9999)}`,
          preco: 200,
          descricao: "Produto Teste",
          quantidade: 10,
        },
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.message).to.eq("Cadastro realizado com sucesso");
      });
    });
  });
});
