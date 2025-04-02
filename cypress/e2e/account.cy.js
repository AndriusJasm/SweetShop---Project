describe("SweetShop - Account Page", () => {
    it("TC_6.1 Positive login - Verify user info is displayed", () => {
        // Visit the login page
        cy.visitLoginPage();

        // Enter valid email and password (replace with actual test credentials)
        cy.get('input[type="email"]').type("test@user.com");
        cy.get('input[type="password"]').type("ValidPassword123");

        // Click the Login button
        cy.contains("button", "Login").click();

        // Verify user info is displayed
        cy.contains("h1", "Your Account").should("be.visible");
    });
});
