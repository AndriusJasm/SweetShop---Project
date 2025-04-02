describe("SweetShop - Sweets Page", () => {
    const productList = ".col-lg-3";
    const productName = ".card-title";
    const productPrice = ".text-muted";
    const productImage = ".card-img-top";
    const addToBasketBtn = ".btn";

    beforeEach(() => {
        cy.visitSweetsPage();
    });

    it('TC_3.1 Verify the page title is "Browse sweets"', () => {
        cy.contains("h1", "Browse sweets").should("be.visible");
    });

    it("TC_3.2 Verify the list of available products is displayed", () => {
        cy.get(productList).should("exist").and("be.visible");
    });

    it('TC_3.3 Verify each product has a name, price, image, and "Add to Basket" button', () => {
        cy.get(productList).each(($el) => {
            cy.wrap($el).find(productName).should("be.visible");
            cy.wrap($el).find(productPrice).should("be.visible");
            cy.wrap($el).find(addToBasketBtn).should("be.visible");
            // Verify the image is actually displayed
            cy.wrap($el)
                .find(productImage)
                .should("be.visible")
                .should(($img) => {
                    expect($img[0].complete).to.be.true; // Ensures image loading is finished
                    expect($img[0].naturalWidth).to.be.greaterThan(0); // Image must be loaded properly
                    expect($img[0].clientWidth).to.be.greaterThan(0); // Ensures it's displayed
                });
        });
    });
});
