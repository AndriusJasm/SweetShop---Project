describe("SweetShop - Basket Page (Cart)", () => {
    const navbarMenu = ".collapse.navbar-collapse";
    const navbarBasketCount = ".badge.badge-success";
    const deliveryCollectFree =
        'label.custom-control-label[for="exampleRadios1"]';
    const deliveryStandardShipping =
        'label.custom-control-label[for="exampleRadios2"]';
    const basketContent = ".list-group";
    const totalAmount = "li.list-group-item strong";
    const deleteItem = ".small";

    beforeEach(() => {
        cy.visitMainPage();
    });

    it("TC_7.1 Add products to basket and verify count is updated", () => {
        const numberOfItems = 5;
        cy.get(navbarMenu).contains("Sweets").click();
        cy.addRandomItemsToBasket(numberOfItems);
        cy.get(navbarBasketCount).should("contain", numberOfItems);
    });

    it('TC_7.2 Add products and select "Collect(FREE)" delivery', () => {
        const numberOfItems = 6;
        cy.get(navbarMenu).contains("Sweets").click();
        cy.addRandomItemsToBasket(numberOfItems);
        cy.get(navbarMenu).contains("Basket").click();
        cy.get(deliveryCollectFree).click();
        cy.get(basketContent).should("be.visible");
    });

    it('TC_7.3 Add products and select "Standard shipping (1.99)" delivery', () => {
        const numberOfItems = 3;
        cy.get(navbarMenu).contains("Sweets").click();
        cy.addRandomItemsToBasket(numberOfItems);
        cy.get(navbarMenu).contains("Basket").click();

        let initialTotal;
        cy.get(totalAmount)
            .invoke("text")
            .then((text) => {
                initialTotal = parseFloat(text.replace("£", "").trim());
            });

        cy.get(deliveryStandardShipping).click();

        cy.get(totalAmout)
            .invoke("text")
            .then((newText) => {
                const finalTotal = parseFloat(newText.replace("£", "").trim());
                expect(finalTotal).to.equal(initialTotal + 1.99);
            });
    });

    it("TC_7.4 Remove item from basket and verify count is updated", () => {
        const numberOfItems = 9;
        cy.get(navbarMenu).contains("Sweets").click();
        cy.addRandomItemsToBasket(numberOfItems);
        cy.get(navbarMenu).contains("Basket").click();

        cy.get(navbarBasketCount)
            .should("be.visible")
            .invoke("text")
            .then((text) => {
                const initialCount = parseInt(text.trim());
                expect(initialCount).to.equal(numberOfItems);
            });

        cy.get(deleteItem).first().click();

        cy.on("window:confirm", () => true);

        cy.get(navbarBasketCount)
            .should("be.visible")
            .invoke("text")
            .then((text) => {
                const updatedCount = parseInt(text.trim());
                expect(updatedCount).to.equal(numberOfItems - 1);
            });
    });

    it("TC_7.5 Empty basket and verify it is empty", () => {
        const numberOfItems = 7;
        cy.get(navbarMenu).contains("Sweets").click();
        cy.addRandomItemsToBasket(numberOfItems);
        cy.get(navbarMenu).contains("Sweets").click();

        cy.get("body").then(($body) => {
            if ($body.find(deleteItem).length > 0) {
                const deleteItem = () => {
                    cy.get("body").then(($body) => {
                        if ($body.find(deleteItem).length > 0) {
                            cy.get(deleteItem).first().click();

                            cy.on("window:confirm", () => true);

                            cy.wait(500);

                            cy.reload();
                            cy.wait(1000);

                            deleteItem();
                        } else {
                            cy.log("Basket is empty");
                        }
                    });
                };

                deleteItem();
            } else {
                cy.log("Basket was already empty");
            }
        });

        cy.get(".basketCount", { timeout: 10000 }).should("not.exist");
    });
});
