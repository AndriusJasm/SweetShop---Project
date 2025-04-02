describe("SweetShop - Login Page", () => {
    const paragraphLoginDescription = ".lead";
    beforeEach(() => {
        cy.visitLoginPage();
    });

    it('TC_5.1 Verify the page title is "Login"', () => {
        cy.contains("h1", "Login").should("be.visible");
    });

    it("TC_5.2 Verify the page has a description", () => {
        cy.get(paragraphLoginDescription).and("be.visible").and("not.be.empty");
    });

    it("TC_5.3 Verify links to Twitter, Facebook, Linkedin", () => {
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

    it("TC_5.4 Positive with valid data", () => {
        cy.get('input[type="email"]').type("test@user.com");
        cy.get('input[type="password"]').type("ValidPassword123");
        cy.contains("button", "Login").click();
        cy.url().should("include", "/00efc23d-b605-4f31-b97b-6bb276de447e");
    });

    it("TC_5.5 Negative with wrong email format", () => {
        cy.get('input[type="email"]').type("invalidemail");
        cy.get('input[type="password"]').type("ValidPassword123");
        cy.contains("button", "Login").click();
        cy.contains("Please enter a valid email address.").should("be.visible");
    });

    it("TC_5.6 Negative with empty email", () => {
        cy.get('input[type="password"]').type("ValidPassword123");
        cy.contains("button", "Login").click();
        cy.contains("Please enter a valid email address.").should("be.visible");
    });

    it("TC_5.7 Negative with empty password", () => {
        cy.get('input[type="email"]').type("test@user.com");
        cy.contains("button", "Login").click();
        cy.contains("Please enter a valid password.").should("be.visible");
    });

    it("TC_5.8 Negative with empty email and empty password", () => {
        cy.contains("button", "Login").click();
        cy.contains("Please enter a valid email address.").should("be.visible");
        cy.contains("Please enter a valid password.").should("be.visible");
    });
});
