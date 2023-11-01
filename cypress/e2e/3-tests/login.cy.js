describe("login", () => {
  it("can login", () => {
    cy.visit("index.html");
    cy.get("input#email").type(`aksel.user@gr.com`);
    cy.get("input#pw").type(`ghghghgh{enter}`);
    //cy.get("h1").should("have.text", "profile page");
    cy.get("h1").contains("profile");
  })
})