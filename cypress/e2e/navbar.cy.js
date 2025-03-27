describe("TC_2.1 Verify Sweets Page Loads from Main Page", () => {
    beforeEach(() => {
        cy.visit("https://sweetshop.netlify.app/");
    });

    it("should navigate to the Sweets page correctly", () => {
        // Click on the "Sweets" navigation link
        cy.get(".collapse.navbar-collapse").contains("Sweets").click();

        // Verify the new URL contains "sweets"
        cy.url().should("include", "/sweets");

        // Verify the Sweets page heading or content is visible
        cy.get("h1").should("contain.text", "sweets");
    });
});

describe("TC_2.2 Verify that About page loads from main page correctly.", () => {
    beforeEach(() => {
        cy.visit("https://sweetshop.netlify.app/");
    });

    it("should navigate to the About page correctly", () => {
        // Click on the "About" navigation link
        cy.get(".collapse.navbar-collapse").contains("About").click();

        // Verify the new URL contains "about"
        cy.url().should("include", "/about");

        // Verify the About page heading or content is visible
        cy.get("h1").should("contain.text", "Sweet Shop Project");
    });
});

describe("TC_2.3 Verify that Login page loads from main page correctly.", () => {
    beforeEach(() => {
        cy.visit("https://sweetshop.netlify.app/");
    });

    it("should navigate to the Login page correctly", () => {
        // Click on the "Login" navigation link
        cy.get(".collapse.navbar-collapse").contains("Login").click();

        // Verify the new URL contains "login"
        cy.url().should("include", "/login");

        // Verify the Login page heading or content is visible
        cy.get("h1").should("contain.text", "Login");
    });
});

describe("TC_2.4 Verify that Basket page loads from main page correctly.", () => {
    beforeEach(() => {
        cy.visit("https://sweetshop.netlify.app/");
    });

    it("should navigate to the Basket page correctly", () => {
        // Click on the "Basket" navigation link
        cy.get(".collapse.navbar-collapse").contains("Basket").click();

        // Verify the new URL contains "basket"
        cy.url().should("include", "/basket");

        // Verify the Basket page heading or content is visible
        cy.get("h1").should("contain.text", "Your Basket");
    });
});

describe("TC_2.5 Verify that main page loads from Sweets page correctly.", () => {
    beforeEach(() => {
        cy.visit("https://sweetshop.netlify.app/sweets");
    });

    it("should navigate to the Main page correctly", () => {
        // Click on the "Sweet Shop" navigation link
        cy.get(".navbar-brand").contains("Sweet Shop").click();

        // Verify the Main page heading or content is visible
        cy.get("h1").should("contain.text", "Welcome to the sweet shop!");
    });
});

describe("TC_2.6 Verify that About page loads from Sweets page correctly.", () => {
    beforeEach(() => {
        cy.visit("https://sweetshop.netlify.app/sweets");
    });

    it("should navigate to the About page correctly", () => {
        // Click on the "About" navigation link
        cy.get(".collapse.navbar-collapse").contains("About").click();

        // Verify the new URL contains "about"
        cy.url().should("include", "/about");

        // Verify the About page heading or content is visible
        cy.get("h1").should("contain.text", "Sweet Shop Project");
    });
});

describe("TC_2.7 Verify that Login page loads from Sweets page correctly.", () => {
    beforeEach(() => {
        cy.visit("https://sweetshop.netlify.app/sweets");
    });

    it("should navigate to the Login page correctly", () => {
        // Click on the "Login" navigation link
        cy.get(".collapse.navbar-collapse").contains("Login").click();

        // Verify the new URL contains "login"
        cy.url().should("include", "/login");

        // Verify the Login page heading or content is visible
        cy.get("h1").should("contain.text", "Login");
    });
});

describe("TC_2.8 Verify that Basket page loads from Sweets page correctly.", () => {
    beforeEach(() => {
        cy.visit("https://sweetshop.netlify.app/sweets");
    });

    it("should navigate to the Basket page correctly", () => {
        // Click on the "Basket" navigation link
        cy.get(".collapse.navbar-collapse").contains("Basket").click();

        // Verify the new URL contains "basket"
        cy.url().should("include", "/basket");

        // Verify the Basket page heading or content is visible
        cy.get("h1").should("contain.text", "Your Basket");
    });
});

describe("2.9 Verify that main page loads from About page correctly.", () => {
    beforeEach(() => {
        cy.visit("https://sweetshop.netlify.app/about");
    });

    it("should navigate to the Main page correctly", () => {
        // Click on the "Sweet Shop" navigation link
        cy.get(".navbar-brand").contains("Sweet Shop").click();

        // Verify the Main page heading or content is visible
        cy.get("h1").should("contain.text", "Welcome to the sweet shop!");
    });
});

describe("2.10 Verify that Sweets page loads from About page correctly.", () => {
    beforeEach(() => {
        cy.visit("https://sweetshop.netlify.app/about");
    });

    it("should navigate to the Sweets page correctly", () => {
        // Click on the "Sweets" navigation link
        cy.get(".collapse.navbar-collapse").contains("Sweets").click();

        // Verify the new URL contains "sweets"
        cy.url().should("include", "/sweets");

        // Verify the Sweets page heading or content is visible
        cy.get("h1").should("contain.text", "Browse sweets");
    });
});

describe("TC_2.11 Verify that Login page loads from About page correctly.", () => {
    beforeEach(() => {
        cy.visit("https://sweetshop.netlify.app/about");
    });

    it("should navigate to the Login page correctly", () => {
        // Click on the "Login" navigation link
        cy.get(".collapse.navbar-collapse").contains("Login").click();

        // Verify the new URL contains "login"
        cy.url().should("include", "/login");

        // Verify the Login page heading or content is visible
        cy.get("h1").should("contain.text", "Login");
    });
});

describe("TC_2.12 Verify that Basket page loads from About page correctly.", () => {
    beforeEach(() => {
        cy.visit("https://sweetshop.netlify.app/about");
    });

    it("should navigate to the Basket page correctly", () => {
        // Click on the "Basket" navigation link
        cy.get(".collapse.navbar-collapse").contains("Basket").click();

        // Verify the new URL contains "basket"
        cy.url().should("include", "/basket");

        // Verify the Basket page heading or content is visible
        cy.get("h1").should("contain.text", "Your Basket");
    });
});

describe("TC_2.13 Verify that main page loads from Login page correctly.", () => {
    beforeEach(() => {
        cy.visit("https://sweetshop.netlify.app/login");
    });

    it("should navigate to the Main page correctly", () => {
        // Click on the "Sweet Shop" navigation link
        cy.get(".navbar-brand").contains("Sweet Shop").click();

        // Verify the Main page heading or content is visible
        cy.get("h1").should("contain.text", "Welcome to the sweet shop!");
    });
});

describe("TC_2.14 Verify that Sweets page loads from Login page correctly.", () => {
    beforeEach(() => {
        cy.visit("https://sweetshop.netlify.app/login");
    });

    it("should navigate to the Sweets page correctly", () => {
        // Click on the "Sweets" navigation link
        cy.get(".collapse.navbar-collapse").contains("Sweets").click();

        // Verify the new URL contains "sweets"
        cy.url().should("include", "/sweets");

        // Verify the Sweets page heading or content is visible
        cy.get("h1").should("contain.text", "Browse sweets");
    });
});

describe("TC_2.15 Verify that About page loads from Login page correctly.", () => {
    beforeEach(() => {
        cy.visit("https://sweetshop.netlify.app/login");
    });

    it("should navigate to the About page correctly", () => {
        // Click on the "About" navigation link
        cy.get(".collapse.navbar-collapse").contains("About").click();

        // Verify the new URL contains "about"
        cy.url().should("include", "/about");

        // Verify the About page heading or content is visible
        cy.get("h1").should("contain.text", "Sweet Shop Project");
    });
});

describe("TC_2.16 Verify that Basket page loads from Login page correctly.", () => {
    beforeEach(() => {
        cy.visit("https://sweetshop.netlify.app/login");
    });

    it("should navigate to the Basket page correctly", () => {
        // Click on the "Basket" navigation link
        cy.get(".collapse.navbar-collapse").contains("Basket").click();

        // Verify the new URL contains "basket"
        cy.url().should("include", "/basket");

        // Verify the Basket page heading or content is visible
        cy.get("h1").should("contain.text", "Your Basket");
    });
});

describe("TC_2.17 Verify that main page loads from Basket page correctly.", () => {
    beforeEach(() => {
        cy.visit("https://sweetshop.netlify.app/basket");
    });

    it("should navigate to the Main page correctly", () => {
        // Click on the "Sweet Shop" navigation link
        cy.get(".navbar-brand").contains("Sweet Shop").click();

        // Verify the Main page heading or content is visible
        cy.get("h1").should("contain.text", "Welcome to the sweet shop!");
    });
});

describe("TC_2.18 Verify that Sweets page loads from Basket page correctly.", () => {
    beforeEach(() => {
        cy.visit("https://sweetshop.netlify.app/basket");
    });

    it("should navigate to the Sweets page correctly", () => {
        // Click on the "Sweets" navigation link
        cy.get(".collapse.navbar-collapse").contains("Sweets").click();

        // Verify the new URL contains "sweets"
        cy.url().should("include", "/sweets");

        // Verify the Sweets page heading or content is visible
        cy.get("h1").should("contain.text", "Browse sweets");
    });
});

describe("TC_2.19 Verify that About page loads from Basket page correctly.", () => {
    beforeEach(() => {
        cy.visit("https://sweetshop.netlify.app/basket");
    });

    it("should navigate to the About page correctly", () => {
        // Click on the "About" navigation link
        cy.get(".collapse.navbar-collapse").contains("About").click();

        // Verify the new URL contains "about"
        cy.url().should("include", "/about");

        // Verify the About page heading or content is visible
        cy.get("h1").should("contain.text", "Sweet Shop Project");
    });
});

describe("TC_2.20 Verify that Login page loads from Basket page correctly.", () => {
    beforeEach(() => {
        cy.visit("https://sweetshop.netlify.app/basket");
    });

    it("should navigate to the Login page correctly", () => {
        // Click on the "Login" navigation link
        cy.get(".collapse.navbar-collapse").contains("Login").click();

        // Verify the new URL contains "login"
        cy.url().should("include", "/login");

        // Verify the Login page heading or content is visible
        cy.get("h1").should("contain.text", "Login");
    });
});
