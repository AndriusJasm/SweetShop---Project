describe("TC_1.1 Verify Homepage Loads Successfully", () => {
    beforeEach(() => {
        cy.visit("https://sweetshop.netlify.app/");
    });

    it("should display the logo, navigation bar, banner, and product list", () => {
        // Verify the logo is visible
        cy.get(".navbar-brand").should("be.visible");

        // Verify the navigation bar is visible
        cy.get(".collapse.navbar-collapse").should("be.visible");

        // Verify the banner is visible
        cy.get(".advertising").should("be.visible");

        // Verify the product list is visible
        cy.get(".row.text-center").should("be.visible");
    });
});
