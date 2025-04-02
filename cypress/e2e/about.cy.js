describe("SweetShop - About Page", () => {
    const paragraphFooterText = ".m-0.text-center";
    const paragraphsAboutDescription = ".lead";

    beforeEach(() => {
        cy.visitAboutPage();
    });

    it('TC_4.1 Verify the page has the title "Sweet Shop Project"', () => {
        cy.contains("h1", "Sweet Shop Project").should("be.visible");
    });

    it("TC_4.2 Verify the page has a description", () => {
        cy.get(paragraphsAboutDescription)
            .should("exist")
            .and("be.visible")
            .and("not.be.empty");
    });

    it("TC_4.3 Verify the page has a footer and it matches the year 2018", () => {
        cy.get(paragraphFooterText).should("be.visible");
        cy.contains(paragraphFooterText, "2018").should("be.visible");
    });
});
