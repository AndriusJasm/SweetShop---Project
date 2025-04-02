describe("TC_1.1 Verify Homepage Loads Successfully", () => {
    const navbarLogo = ".navbar-brand";
    const navbarMenu = ".collapse.navbar-collapse";
    const productList = ".row.text-center";
    const paragraphFooterText = ".m-0.text-center";

    beforeEach(() => {
        cy.visitMainPage();
    });

    it("should display the logo, navbar menu, banner, product list, welcome msg, footer", () => {
        cy.get(navbarLogo).should("be.visible");
        cy.get(navbarMenu).should("be.visible");
        cy.get(".advertising").should("be.visible");
        cy.contains("h1", "Welcome to the sweet shop!").should("be.visible");
        cy.get(productList).should("be.visible");
        cy.get(paragraphFooterText).should("be.visible");
        cy.contains(paragraphFooterText, "2018").should("be.visible");
    });
});
