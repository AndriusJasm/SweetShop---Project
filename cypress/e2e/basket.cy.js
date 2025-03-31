describe("SweetShop - Basket Page (Cart)", () => {
    const sweetsUrl = "https://sweetshop.netlify.app/sweets";
    const basketUrl = "https://sweetshop.netlify.app/basket";

    beforeEach(() => {
        cy.visit(sweetsUrl);
    });

    it("TC_7.1 Add products to basket and verify count is updated", () => {
        // cy.get(".col-lg-3").first().find(".btn").click();
        const numberOfItems = 3;
        cy.get(".btn").then(($buttons) => {
            const totalItems = $buttons.length;
            const randomIndexes = [];

            while (randomIndexes.length < numberOfItems) {
                const randomIndex = Math.floor(Math.random() * totalItems);
                if (!randomIndexes.includes(randomIndex)) {
                    randomIndexes.push(randomIndex);
                }
            }

            randomIndexes.forEach((index) => {
                cy.wrap($buttons.eq(index)).click();
            });
        });
        cy.get(".badge").should("contain", numberOfItems);
    });

    it('TC_7.2 Add products and select "Collect(FREE)" delivery', () => {
        cy.get(".col-lg-3").eq(0).find(".btn").click();
        cy.get(".col-lg-3").eq(1).find(".btn").click();
        cy.get(".col-lg-3").eq(5).find(".btn").click();
        cy.visit(basketUrl);
        cy.get(".custom-control-label").then(($el) => {
            $el.val("Collect(FREE)").trigger("change");
        });
        cy.get(".list-group").should("be.visible");
    });

    it('TC_7.3 Add products and select "Standard shipping (1.99)" delivery', () => {
        cy.get(".col-lg-3").first().find(".btn").click();
        cy.get(".col-lg-3").eq(3).find(".btn").click();
        cy.get(".col-lg-3").eq(5).find(".btn").click();
        cy.visit(basketUrl);
        // cy.get(".custom-control-label").then(($el) => {
        //     $el.val("Standard Shipping (£1.99)").trigger("change");
        // });
        cy.contains("Standard Shipping (£1.99)").click();
        // cy.get(".list-group").should("contain", "1.99");
        // Capture the total before adding shipping
        let initialTotal;
        cy.get(".strong")
            .invoke("text")
            .then((text) => {
                initialTotal = parseFloat(text.replace("£", "").trim());
            });

        // Verify total amount includes shipping cost (£1.99)
        cy.get(".total-amount")
            .invoke("text")
            .then((newText) => {
                const finalTotal = parseFloat(newText.replace("£", "").trim());
                expect(finalTotal).to.equal(initialTotal + 1.99);
            });
    });

    it("TC_7.4 Remove item from basket and verify count is updated", () => {
        cy.visit(basketUrl);
        cy.get(".Delete Item").first().click();
        cy.get(".basket-count").should("contain", "0");
    });
    it("TC_7.5 Empty basket and verify it is empty", () => {
        cy.visit(basketUrl);
        cy.get(".removeItem").each(($el) => {
            cy.wrap($el).click();
        });
        cy.get(".strong").invoke("text").then(parseFloat).should("eq", 0);
    });
});
