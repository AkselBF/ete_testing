describe("local storage", () => {
  it("store and access values", () => {
    cy.visit("index.html");
    const myEmail = "aksel.user@noroff.no";
    
    cy.get("input#email").type(myEmail);
    cy.get("input#password").type(`ghghghgh{enter}`);
    //cy.get("h1").should("have.text", "profile page");

    cy.window().its("localStorage").invoke("getItem", "email").should("eq", myEmail);
  })
})