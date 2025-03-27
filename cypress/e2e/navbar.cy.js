describe("TC_2.1 Verify Sweets Page Loads from Main Page", () => {
    beforeEach(() => {
        cy.visit("https://sweetshop.netlify.app/");
    });

    it("should navigate to the Sweets page correctly", () => {
        // Click on the "Sweets" navigation link
        cy.get(".collapse.navbar-collapse").contains("Sweets").click();

        // Verify the new URL contains "sweets"
        cy.url().should("include", "/sweets");

        // Verify the Sweets page heading or content is visible
        cy.get("h1").should("contain.text", "sweets");
    });
});

describe("TC_2.2 Verify that About page loads from main page correctly.", () => {
    beforeEach(() => {
        cy.visit("https://sweetshop.netlify.app/");
    });

    it("should navigate to the About page correctly", () => {
        // Click on the "About" navigation link
        cy.get(".collapse.navbar-collapse").contains("About").click();

        // Verify the new URL contains "sweets"
        cy.url().should("include", "/about");

        // Verify the About page heading or content is visible
        cy.get("h1").should("contain.text", "Sweet Shop Project");
    });
});
