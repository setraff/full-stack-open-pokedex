describe("Pokedex", function () {
  it("front page can be opened", function () {
    cy.visit("http://localhost:5000");
    cy.contains("ivysaur");
    cy.contains(
      "Pokémon and Pokémon character names are trademarks of Nintendo."
    );
  });
  it("one can navigate from the main page to the page of a particular Pokemon, e.g. ivysaur.", function () {
    cy.visit("http://localhost:5000");
    cy.contains("ivysaur").click();
    cy.contains("chlorophyll");
  });
  it("Health check passes", function () {
    cy.visit("http://localhost:5000/health");
    cy.contains("ok");
  });
});
