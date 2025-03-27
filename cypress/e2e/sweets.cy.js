describe("SweetShop - Sweets Page", () => {
    const url = "https://sweetshop.netlify.app/sweets";

    beforeEach(() => {
        cy.visit(url);
    });

    it('TC_3.1 Verify the page title is "Browse sweets"', () => {
        cy.contains("h1", "Browse sweets").should("be.visible");
    });

    it("TC_3.2 Verify the list of available products is displayed", () => {
        cy.get(".container").should("exist").and("be.visible");
    });

    it('TC_3.3 Verify each product has a name, price, image, and "Add to Basket" button', () => {
        cy.get(".col-lg-3").each(($el) => {
            cy.wrap($el).find(".card-title").should("be.visible");
            cy.wrap($el).find(".text-muted").should("be.visible");
            // Verify the image is actually displayed
            cy.wrap($el)
                .find(".card-img-top")
                .should("be.visible")
                .should(($img) => {
                    expect($img[0].complete).to.be.true; // Ensures image loading is finished
                    expect($img[0].naturalWidth).to.be.greaterThan(0); // Image must be loaded properly
                    expect($img[0].clientWidth).to.be.greaterThan(0); // Ensures it's displayed
                });
            cy.wrap($el).find(".btn").should("be.visible");
        });
    });
});
