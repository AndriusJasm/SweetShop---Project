describe("SweetShop - About Page", () => {
    const url = "https://sweetshop.netlify.app/about";

    beforeEach(() => {
        cy.visit(url);
    });

    it('TC_4.1 Verify the page has the title "Sweet Shop Project"', () => {
        cy.contains("h1", "Sweet Shop Project").should("be.visible");
    });

    it("TC_4.2 Verify the page has a description", () => {
        cy.get(".lead").should("exist").and("be.visible").and("not.be.empty");
    });

    it("TC_4.3 Verify the page has a banner and it matches the year 2018", () => {
        cy.get(".m-0.text-center").should("be.visible");
        cy.contains(".m-0.text-center", "2018").should("be.visible");
    });
});
