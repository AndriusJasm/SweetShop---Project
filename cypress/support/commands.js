Cypress.Commands.add("addRandomItemsToBasket", (count) => {
    cy.get(".btn").then(($buttons) => {
        const totalItems = $buttons.length;
        const randomIndexes = [];

        while (randomIndexes.length < count) {
            const randomIndex = Math.floor(Math.random() * totalItems);
            if (!randomIndexes.includes(randomIndex)) {
                randomIndexes.push(randomIndex);
            }
        }

        randomIndexes.forEach((index) => {
            cy.wrap($buttons.eq(index)).click();
        });
    });
});

Cypress.Commands.add("visitMainPage", () => {
    cy.visit("https://sweetshop.netlify.app/");
});

Cypress.Commands.add("visitSweetsPage", () => {
    cy.visit("https://sweetshop.netlify.app/sweets");
});

Cypress.Commands.add("visitAboutPage", () => {
    cy.visit("https://sweetshop.netlify.app/about");
});

Cypress.Commands.add("visitLoginPage", () => {
    cy.visit("https://sweetshop.netlify.app/login");
});

Cypress.Commands.add("visitBasketPage", () => {
    cy.visit("https://sweetshop.netlify.app/basket");
});
