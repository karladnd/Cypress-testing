describe("✅ Positive Test - User Login", () => {
  
  it("🔹 Successful Login", () => {
    cy.visit("https://magento.softwaretestingboard.com/"); // Buka website
    cy.get('.panel > .header > .authorization-link > a').click(); // Klik Sign In

    // Input email dan password
    cy.get("#email").type('example@mail.com');  // Ganti dengan email valid
    cy.get("#pass").type('Qwerty123!'); // Ganti dengan password valid
    cy.get("#send2").click(); // Klik tombol login
    cy.get('.base').should('have.text','Home Page')
  });

});
