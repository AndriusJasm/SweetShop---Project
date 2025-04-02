describe("TS_2 Header (navigation bar)", () => {
    const navbarMenu = ".collapse.navbar-collapse";
    const navbarLogo = ".navbar-brand";

    describe("TC_2.1 Verify Sweets Page Loads from Main Page", () => {
        beforeEach(() => {
            cy.visitMainPage();
        });

        it("should navigate to the Sweets page correctly", () => {
            cy.get(navbarMenu).contains("Sweets").click();
            cy.url().should("include", "/sweets");
            cy.get("h1").should("contain.text", "Browse sweets");
        });
    });

    describe("TC_2.2 Verify that About page loads from main page correctly.", () => {
        beforeEach(() => {
            cy.visitMainPage();
        });

        it("should navigate to the About page correctly", () => {
            cy.get(navbarMenu).contains("About").click();
            cy.url().should("include", "/about");
            cy.get("h1").should("contain.text", "Sweet Shop Project");
        });
    });

    describe("TC_2.3 Verify that Login page loads from main page correctly.", () => {
        beforeEach(() => {
            cy.visitMainPage();
        });

        it("should navigate to the Login page correctly", () => {
            cy.get(navbarMenu).contains("Login").click();
            cy.url().should("include", "/login");
            cy.get("h1").should("contain.text", "Login");
        });
    });

    describe("TC_2.4 Verify that Basket page loads from main page correctly.", () => {
        beforeEach(() => {
            cy.visitMainPage();
        });

        it("should navigate to the Basket page correctly", () => {
            cy.get(navbarMenu).contains("Basket").click();
            cy.url().should("include", "/basket");
            cy.get("h1").should("contain.text", "Your Basket");
        });
    });

    describe("TC_2.5 Verify that main page loads from Sweets page correctly.", () => {
        beforeEach(() => {
            cy.visitSweetsPage();
        });

        it("should navigate to the Main page correctly", () => {
            cy.get(navbarLogo).contains("Sweet Shop").click();
            cy.get("h1").should("contain.text", "Welcome to the sweet shop!");
        });
    });

    describe("TC_2.6 Verify that About page loads from Sweets page correctly.", () => {
        beforeEach(() => {
            cy.visitSweetsPage();
        });

        it("should navigate to the About page correctly", () => {
            cy.get(navbarMenu).contains("About").click();
            cy.url().should("include", "/about");
            cy.get("h1").should("contain.text", "Sweet Shop Project");
        });
    });

    describe("TC_2.7 Verify that Login page loads from Sweets page correctly.", () => {
        beforeEach(() => {
            cy.visitSweetsPage();
        });

        it("should navigate to the Login page correctly", () => {
            cy.get(navbarMenu).contains("Login").click();
            cy.url().should("include", "/login");
            cy.get("h1").should("contain.text", "Login");
        });
    });

    describe("TC_2.8 Verify that Basket page loads from Sweets page correctly.", () => {
        beforeEach(() => {
            cy.visitSweetsPage();
        });

        it("should navigate to the Basket page correctly", () => {
            cy.get(navbarMenu).contains("Basket").click();
            cy.url().should("include", "/basket");
            cy.get("h1").should("contain.text", "Your Basket");
        });
    });

    describe("2.9 Verify that main page loads from About page correctly.", () => {
        beforeEach(() => {
            cy.visitAboutPage();
        });

        it("should navigate to the Main page correctly", () => {
            cy.get(navbarLogo).contains("Sweet Shop").click();
            cy.get("h1").should("contain.text", "Welcome to the sweet shop!");
        });
    });

    describe("2.10 Verify that Sweets page loads from About page correctly.", () => {
        beforeEach(() => {
            cy.visitAboutPage();
        });

        it("should navigate to the Sweets page correctly", () => {
            cy.get(navbarMenu).contains("Sweets").click();
            cy.url().should("include", "/sweets");
            cy.get("h1").should("contain.text", "Browse sweets");
        });
    });

    describe("TC_2.11 Verify that Login page loads from About page correctly.", () => {
        beforeEach(() => {
            cy.visitAboutPage();
        });

        it("should navigate to the Login page correctly", () => {
            cy.get(navbarMenu).contains("Login").click();
            cy.url().should("include", "/login");
            cy.get("h1").should("contain.text", "Login");
        });
    });

    describe("TC_2.12 Verify that Basket page loads from About page correctly.", () => {
        beforeEach(() => {
            cy.visitAboutPage();
        });

        it("should navigate to the Basket page correctly", () => {
            cy.get(navbarMenu).contains("Basket").click();
            cy.url().should("include", "/basket");
            cy.get("h1").should("contain.text", "Your Basket");
        });
    });

    describe("TC_2.13 Verify that main page loads from Login page correctly.", () => {
        beforeEach(() => {
            cy.visitLoginPage();
        });

        it("should navigate to the Main page correctly", () => {
            cy.get(navbarLogo).contains("Sweet Shop").click();
            cy.get("h1").should("contain.text", "Welcome to the sweet shop!");
        });
    });

    describe("TC_2.14 Verify that Sweets page loads from Login page correctly.", () => {
        beforeEach(() => {
            cy.visitLoginPage();
        });

        it("should navigate to the Sweets page correctly", () => {
            cy.get(navbarMenu).contains("Sweets").click();
            cy.url().should("include", "/sweets");
            cy.get("h1").should("contain.text", "Browse sweets");
        });
    });

    describe("TC_2.15 Verify that About page loads from Login page correctly.", () => {
        beforeEach(() => {
            cy.visitLoginPage();
        });

        it("should navigate to the About page correctly", () => {
            cy.get(navbarMenu).contains("About").click();
            cy.url().should("include", "/about");
            cy.get("h1").should("contain.text", "Sweet Shop Project");
        });
    });

    describe("TC_2.16 Verify that Basket page loads from Login page correctly.", () => {
        beforeEach(() => {
            cy.visitBasketPage();
        });

        it("should navigate to the Basket page correctly", () => {
            cy.get(navbarMenu).contains("Basket").click();
            cy.url().should("include", "/basket");
            cy.get("h1").should("contain.text", "Your Basket");
        });
    });

    describe("TC_2.17 Verify that main page loads from Basket page correctly.", () => {
        beforeEach(() => {
            cy.visitBasketPage();
        });

        it("should navigate to the Main page correctly", () => {
            cy.get(navbarLogo).contains("Sweet Shop").click();
            cy.get("h1").should("contain.text", "Welcome to the sweet shop!");
        });
    });

    describe("TC_2.18 Verify that Sweets page loads from Basket page correctly.", () => {
        beforeEach(() => {
            cy.visitBasketPage();
        });

        it("should navigate to the Sweets page correctly", () => {
            cy.get(navbarMenu).contains("Sweets").click();
            cy.url().should("include", "/sweets");
            cy.get("h1").should("contain.text", "Browse sweets");
        });
    });

    describe("TC_2.19 Verify that About page loads from Basket page correctly.", () => {
        beforeEach(() => {
            cy.visitBasketPage();
        });

        it("should navigate to the About page correctly", () => {
            cy.get(navbarMenu).contains("About").click();
            cy.url().should("include", "/about");
            cy.get("h1").should("contain.text", "Sweet Shop Project");
        });
    });

    describe("TC_2.20 Verify that Login page loads from Basket page correctly.", () => {
        beforeEach(() => {
            cy.visitBasketPage();
        });

        it("should navigate to the Login page correctly", () => {
            cy.get(navbarMenu).contains("Login").click();
            cy.url().should("include", "/login");
            cy.get("h1").should("contain.text", "Login");
        });
    });
});
