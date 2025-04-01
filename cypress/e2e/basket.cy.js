describe("SweetShop - Basket Page (Cart)", () => {
    const sweetsUrl = "https://sweetshop.netlify.app/sweets";
    const basketUrl = "https://sweetshop.netlify.app/basket";

    beforeEach(() => {
        cy.visit(sweetsUrl);
    });

    it("TC_7.1 Add products to basket and verify count is updated", () => {
        // cy.get(".col-lg-3").first().find(".btn").click();
        const numberOfItems = 7;
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
        const numberOfItems = 5;
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
        cy.visit(basketUrl);
        cy.get(".custom-control-label").eq(0).click();
        // cy.get(".custom-control-label", [1]).then(($el) => {
        //     $el.val("Collect(FREE)").trigger("change");
        // });
        cy.get(".list-group").should("be.visible");
    });

    it('TC_7.3 Add products and select "Standard shipping (1.99)" delivery', () => {
        const numberOfItems = 6;
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
        cy.visit(basketUrl);
        cy.get(".custom-control-label").eq(1).click();
        // cy.get(".custom-control-label").then(($el) => {
        //     $el.val("Standard Shipping (£1.99)").trigger("change");
        // });
        // cy.contains("Standard Shipping (£1.99)").click();
        // cy.get(".list-group").should("contain", "1.99");
        // Capture the total before adding shipping
        let initialTotal;
        cy.get(".list-group-item")
            .invoke("text")
            .then((text) => {
                initialTotal = parseFloat(text.replace("£", "").trim());
            });

        // Verify total amount includes shipping cost (£1.99)
        cy.get(".list-group-item")
            .eq(1)
            .invoke("text")
            .then((newText) => {
                const finalTotal = parseFloat(newText.replace("£", "").trim());
                expect(finalTotal).to.equal(initialTotal + 1.99);
            });
    });

    it("TC_7.4 Remove item from basket and verify count is updated", () => {
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
        cy.visit(basketUrl);
        // Step 3: Verify Initial Basket Count
        cy.get(".badge")
            .should("be.visible")
            .invoke("text")
            .then((text) => {
                const initialCount = parseInt(text.trim());
                expect(initialCount).to.equal(numberOfItems);
            });

        // Step 4: Remove One Item
        cy.get(".small").first().click(); // Click first remove button

        // Handle Confirmation Popup (if it appears)
        cy.on("window:confirm", () => true);

        // Step 5: Verify Basket Count is Updated
        cy.get(".badge")
            .should("be.visible")
            .invoke("text")
            .then((text) => {
                const updatedCount = parseInt(text.trim());
                expect(updatedCount).to.equal(numberOfItems - 1);
            });
    });

    it("TC_7.5 Empty basket and verify it is empty", () => {
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
        cy.visit(basketUrl);

        cy.get(".small").then(($items) => {
            if ($items.length === 0) {
                cy.log("Basket is already empty");
                return;
            }

            function deleteItem() {
                cy.get(".small")
                    .first()
                    .then(($el) => {
                        if ($el.length) {
                            cy.wrap($el).click();

                            // Handle confirmation alert
                            cy.on("window:confirm", () => true);

                            // Wait for the item to be removed before continuing
                            cy.wait(500);

                            // Reload after deleting to prevent DOM detachment issues
                            cy.reload();
                            cy.wait(1000);

                            // Recursively call function until all items are gone
                            deleteItem();
                        }
                    });
            }

            deleteItem();

            // Verify basket is empty
            cy.get(".basketCount").should("not.exist");
        });

        // cy.get(".small").then(($items) => {
        //     if ($items.length === 0) {
        //         cy.log("Basket is already empty");
        //         return;
        //     }

        //     cy.wrap($items).each(($el, index, $list) => {
        //         cy.wrap($el)
        //             .should("be.visible") // Ensure delete button is visible
        //             .click(); // Click delete button

        //         // Handle confirmation alert
        //         cy.on("window:confirm", () => true);

        //         // Wait for the DOM update
        //         cy.wait(500);

        //         // Reload after deleting each item to avoid detached elements
        //         if (index < $list.length - 1) {
        //             cy.reload();
        //             cy.wait(1000); // Wait for page load
        //         }
        //     });

        //     // Ensure basket is empty after deletion
        //     cy.get(".basket-item").should("not.exist");
        // });

        // Delete each item in the basket
        // cy.get(".small").each(($el, index, $list) => {
        //     cy.wrap($el).should("be.visible").click(); // Ensure delete button is visible before clicking

        //     // Handle the confirmation alert
        //     cy.on("window:confirm", () => true);

        //     // Wait for the basket to update before proceeding to the next item
        //     cy.wait(1000);

        //     // Ensure the basket updates before moving to the next iteration
        //     cy.get(".basketCount").should("have.length.lessThan", $list.length);
        // });

        // // Verify the basket is empty
        // cy.get(".strong").invoke("text").then(parseFloat).should("eq", 0);
        // cy.get(".small").each(($el) => {
        //     cy.wrap($el).click();
        // });
        // cy.get(".strong").invoke("text").then(parseFloat).should("eq", 0);
    });
});
