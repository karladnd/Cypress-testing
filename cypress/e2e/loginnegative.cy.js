describe("Negative Test - User Login", () => {
  
    it("🔹 login was not successful ", () => {
      cy.visit("https://magento.softwaretestingboard.com/"); // Buka website
      cy.get('.panel > .header > .authorization-link > a').click(); // Klik Sign In
  
      // Input email dan password
      cy.get("#email").type('example@mail.com');  
      cy.get("#pass").type('Abcd123'); 
      cy.get("#send2").click(); 
      cy.contains("The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later..").should("be.visible");
    });
  
  });
  