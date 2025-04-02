describe("SweetShop - Account Page", () => {
    it("TC_6.1 Positive login - Verify user info is displayed", () => {
        cy.visitLoginPage();

        cy.get('input[type="email"]').type("test@user.com");
        cy.get('input[type="password"]').type("ValidPassword123");

        cy.contains("button", "Login").click();

        cy.contains("h1", "Your Account").should("be.visible");
    });
});
