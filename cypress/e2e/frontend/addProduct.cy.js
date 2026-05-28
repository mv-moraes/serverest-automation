describe("Frontend - Adicionar produto", () => {
  it("Deve adicionar produto na lista de compras", () => {
    const email = "marcosqatest@gmail.com";
    const senha = "senha123";

    cy.login(email, senha);

    cy.get("button").contains("Adicionar a lista").first().click();

    cy.contains("Lista de Compras").should("be.visible");
  });
});
