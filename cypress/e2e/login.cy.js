describe("SweetShop - Login Page", () => {
    const url = "https://sweetshop.netlify.app/login";

    beforeEach(() => {
        cy.visit(url);
    });

    it('TC_5.1 Verify the page title is "Login"', () => {
        cy.contains("h1", "Login").should("be.visible");
    });

    it("TC_5.2 Verify the page has a description", () => {
        cy.get(".lead").and("be.visible").and("not.be.empty");
    });

    it("TC_5.5 Verify links to Twitter, Facebook, Linkedin", () => {
        cy.get('a[href*="twitter.com"]')
            .should("have.attr", "href")
            .and("include", "twitter.com");
        cy.get('a[href*="facebook.com"]')
            .should("have.attr", "href")
            .and("include", "facebook.com");
        cy.get('a[href*="linkedin.com"]')
            .should("have.attr", "href")
            .and("include", "linkedin.com");
    });

    it("TC_5.6 Positive with valid data", () => {
        cy.get('input[type="email"]').type("validuser@example.com"); // Replace with actual valid email
        cy.get('input[type="password"]').type("ValidPassword123"); // Replace with actual valid password
        cy.contains("button", "Login").click();
        cy.url().should("include", "/00efc23d-b605-4f31-b97b-6bb276de447e"); // Ensure successful navigation to "Your Account" page
    });

    it("TC_5.7 Negative with wrong email format", () => {
        cy.get('input[type="email"]').type("invalidemail");
        cy.get('input[type="password"]').type("ValidPassword123");
        cy.contains("button", "Login").click();
        cy.contains("Please enter a valid email address.").should("be.visible");
    });

    it("TC_5.8 Negative with empty email", () => {
        cy.get('input[type="password"]').type("ValidPassword123");
        cy.contains("button", "Login").click();
        cy.contains("Please enter a valid email address.").should("be.visible");
    });

    it("TC_5.9 Negative with empty password", () => {
        cy.get('input[type="email"]').type("validuser@example.com");
        cy.contains("button", "Login").click();
        cy.contains("Please enter a valid password.").should("be.visible");
    });

    it("TC_5.10 Negative with empty email and empty password", () => {
        cy.contains("button", "Login").click();
        cy.contains("Please enter a valid email address.").should("be.visible");
        cy.contains("Please enter a valid password.").should("be.visible");
    });
});
