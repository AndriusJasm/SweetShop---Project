describe("SweetShop - Basket Page (Cart)", () => {
    const navbarMenu = ".collapse.navbar-collapse";
    const navbarBasketCount = ".badge.badge-success";
    const deliveryCollectFree =
        'label.custom-control-label[for="exampleRadios1"]';
    const deliveryStandardShipping =
        'label.custom-control-label[for="exampleRadios2"]';
    const basketContent = ".list-group";
    const totalAmout = "li.list-group-item strong";
    const deleteItem = ".small";
    const numberOfItems = 5;

    beforeEach(() => {
        cy.visitMainPage();
    });

    it("TC_7.1 Add products to basket and verify count is updated", () => {
        cy.get(navbarMenu).contains("Sweets").click();
        cy.addRandomItemsToBasket(numberOfItems);
        cy.get(navbarBasketCount).should("contain", numberOfItems);
    });

    it('TC_7.2 Add products and select "Collect(FREE)" delivery', () => {
        cy.get(navbarMenu).contains("Sweets").click();
        cy.addRandomItemsToBasket(numberOfItems);
        cy.get(navbarMenu).contains("Basket").click();
        cy.get(deliveryCollectFree).click();
        cy.get(basketContent).should("be.visible");
    });

    it('TC_7.3 Add products and select "Standard shipping (1.99)" delivery', () => {
        cy.get(navbarMenu).contains("Sweets").click();
        cy.addRandomItemsToBasket(numberOfItems);
        cy.get(navbarMenu).contains("Basket").click();

        let initialTotal;
        cy.get(totalAmout)
            .invoke("text")
            .then((text) => {
                initialTotal = parseFloat(text.replace("£", "").trim());
            });

        cy.get(deliveryStandardShipping).click();

        // Verify total amount includes shipping cost (£1.99)
        cy.get(totalAmout)
            .invoke("text")
            .then((newText) => {
                const finalTotal = parseFloat(newText.replace("£", "").trim());
                expect(finalTotal).to.equal(initialTotal + 1.99);
            });
    });

    it("TC_7.4 Remove item from basket and verify count is updated", () => {
        cy.get(navbarMenu).contains("Sweets").click();
        cy.addRandomItemsToBasket(numberOfItems);
        cy.get(navbarMenu).contains("Basket").click();
        // Step 3: Verify Initial Basket Count
        cy.get(navbarBasketCount)
            .should("be.visible")
            .invoke("text")
            .then((text) => {
                const initialCount = parseInt(text.trim());
                expect(initialCount).to.equal(numberOfItems);
            });

        // Step 4: Remove One Item
        cy.get(deleteItem).first().click();

        // Handle Confirmation Popup
        cy.on("window:confirm", () => true);

        // Step 5: Verify Basket Count is Updated
        cy.get(navbarBasketCount)
            .should("be.visible")
            .invoke("text")
            .then((text) => {
                const updatedCount = parseInt(text.trim());
                expect(updatedCount).to.equal(numberOfItems - 1);
            });
    });

    it("TC_7.5 Empty basket and verify it is empty", () => {
        cy.get(navbarMenu).contains("Sweets").click();
        cy.addRandomItemsToBasket(numberOfItems);
        cy.get(navbarMenu).contains("Sweets").click();
        // Pirmiausia patikriname, ar yra elementų su klase ".small"
        cy.get("body").then(($body) => {
            if ($body.find(deleteItem).length > 0) {
                // Funkcija rekursyviai pašalina prekes
                const deleteItem = () => {
                    cy.get("body").then(($body) => {
                        if ($body.find(deleteItem).length > 0) {
                            cy.get(deleteItem).first().click();

                            // Patvirtiname išmetimo langą
                            cy.on("window:confirm", () => true);

                            // Laukiame, kol elementas bus pašalintas
                            cy.wait(500);

                            // Atkuriame puslapį, kad išvengtume DOM detachment problemų
                            cy.reload();
                            cy.wait(1000);

                            // Rekursyviai pašaliname kitą elementą
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

        // Patikriname, ar krepšelyje neberodo elemento, rodančio prekių kiekį
        cy.get(".basketCount", { timeout: 10000 }).should("not.exist");
    });
});
