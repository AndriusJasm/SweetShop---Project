describe("SweetShop - Account Page", () => {
    const loginUrl = "https://sweetshop.netlify.app/login";
    const accountUrl =
        "https://sweetshop.netlify.app/00efc23d-b605-4f31-b97b-6bb276de447e";

    it("TC_6.1 Positive login - Verify user info is displayed", () => {
        // Visit the login page
        cy.visit(loginUrl);

        // Enter valid email and password (replace with actual test credentials)
        cy.get('input[type="email"]').type("test@user.com");
        cy.get('input[type="password"]').type("ValidPassword123");

        // Click the Login button
        cy.contains("button", "Login").click();

        // Verify user info is displayed
        cy.get(".lead").should("be.visible").and("contain", "test@user.com"); // Ensuring correct user info is shown
    });
});
