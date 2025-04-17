# ![](pics/scenario.png) Test Scenarios and Test Cases for ![](pics/image.png)SweetShop Website

Automated end-to-end testing for the **Sweet Shop** web application using **Cypress**.

**Live App**: ![](pics/candy.png)[**Sweet Shop**](https://sweetshop.netlify.app)

---

## ![](pics/description.png) Description

The project includes automated Cypress tests that verify the core functionalities of the **Home**, **Navigation Bar**, **Sweets**, **About**, **Login**, **Account** and **Basket** pages.

These features are thoroughly tested using:

-   **7 Test Scenarios (TS)**
-   **41 Test Cases (TC)**

All Test Scenarios (TS) and Test Cases (TC) are described in the [**TestCases.md**](/TestCases.md) file.

Project progress was controlled using **Jira**, all actions are described in the [**JiraProject.md**](/JiraProject.md) file.

---

## ![](pics/project.png) Project Structure

-   ![](pics/folder.png) SWEETSHOP_PROJECT
-   ├── ![](pics/folder.png) .github/
-   │ └── ![](pics/folder.png) workflows/ # GitHub Actions workflow for CI
-   │ └── ![](pics/file.png) node.js.yml
-   ├── ![](pics/folder.png) cypress/
-   │ ├── ![](pics/folder.png) e2e/ # End-to-end test specs
-   │ │ ├── ![](pics/file.png) about.cy.js
-   │ │ ├── ![](pics/file.png) account.cy.js
-   │ │ ├── ![](pics/file.png) basket.cy.js
-   │ │ ├── ![](pics/file.png) home.cy.js
-   │ │ ├── ![](pics/file.png) login.cy.js
-   │ │ ├── ![](pics/file.png) navbar.cy.js
-   │ │ └── ![](pics/file.png) sweets.cy.js
-   │ ├── ![](pics/folder.png) fixtures/ # Test data (example.json)
-   │ └── ![](pics/folder.png) support/ # Custom Cypress commands
-   │ ├── ![](pics/file.png) commands.js
-   │ └── ![](pics/file.png) e2e.js # Cypress setup
-   ├── ![](pics/folder.png) node_modules/ # Dependencies
-   ├── ![](pics/folder.png) pics/ # Project pictures
-   ├── ![](pics/file.png) .gitignore # Git ignore file
-   ├── ![](pics/file.png) cypress.config.js # Cypress configuration
-   ├── ![](pics/file.png) JiraProject.md # Jira project description
-   ├── ![](pics/file.png) LICENSE # MIT license
-   ├── ![](pics/file.png) package-lock.json # Dependency lockfile
-   ├── ![](pics/file.png) package.json # Dependencies & scripts
-   ├── ![](pics/file.png) README.md # Project description
-   ├── ![](pics/file.png) TestCases.md # Test cases documentation
-   └── ![](pics/file.png) TesResults.png # Screenshot of Testing Results

---

## ![](pics/installation.png) Installation

### 1️ Prerequisites

```
Node.js
npm
```

### 2️ Clone the Repository

```
git clone https://github.com/AndriusJasm/SweetShop---Project
```

### 3️ Install Dependencies

```
npm install
```

---

## ![](pics/tester.png) Running Tests

### Run Cypress in UI Mode

```
npm run cy:open
```

### Run Cypress in CLI Mode

```
npm run cy:run
```

---

## ![](pics/command.png) Cypress Commands

| Command                               | Purpose                     |
| ------------------------------------- | --------------------------- |
| `cy.addRandomItemsToBasket(min, max)` | Add random number of sweets |
| `cy.visitMainPage()`                  | Visit homepage              |
| `cy.visitSweetsPage()`                | Visit sweets catalog        |
| `cy.visitAboutPage()`                 | Visit about page            |
| `cy.visitLoginPage()`                 | Go to login                 |
| `cy.visitBasketPage()`                | Go to basket                |
| `cy.addItemToBasket(index)`           | Add a specific sweet        |

---

## ![](pics/action.png) CI/CD with GitHub Actions

The workflow is triggered on push and pull requests to the main branch.  
The GitHub Actions workflow **(.github/workflows/node.js.yml)** performs the following steps:

-   Sets up Node.js version 18.
-   Installs dependencies using npm install.
-   Runs Cypress tests for end-to-end testing.
-   Executes Cypress tests using cypress-io/github-action@v6.

---

## ![](pics/screenshot.png) Screenshot of Testing Results

![](pics/TestResults.png)

---

## ![](pics/license.png) License

MIT License: Copyright (c) 2025 AndriusJasm

---

## ![](pics/author.png) Author

Andrius Jasmontas
