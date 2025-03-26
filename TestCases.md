# Test Scenarios and Test Cases for SweetShop Website

## 1. Homepage

### Test Scenario: Homepage Load

-   **Test Case:** Verify that the homepage loads successfully.
-   **Steps:**
    1. Open the URL: [SweetShop](https://sweetshop.netlify.app/)
    2. Check if all elements (logo, navigation bar, banner, product list) are visible.
-   **Expected Result:** The homepage loads without errors, and all elements are displayed correctly.

### Test Scenario: Navigation Bar

  <!-- - **Test Case:** Verify that all navigation links work correctly.
  - **Steps:**
    1. Click on each navigation link (e.g., Sweets, About, Login, Basket).
    2. Verify that the corresponding page opens.
  - **Expected Result:** All navigation links redirect to the correct pages. -->

-   **Test Case:** Verify that "Sweets" page loads from main page correctly.
-   **Test Case:** Verify that "About" page loads from main page correctly.
-   **Test Case:** Verify that "Login" page loads from main page correctly.
-   **Test Case:** Verify that "Basket" page loads from main page correctly.

-   **Test Case:** Verify that main page loads from "Sweets" page correctly.
-   **Test Case:** Verify that "About" page loads from "Sweets" page correctly.
-   **Test Case:** Verify that "Login" page loads from "Sweets" page correctly.
-   **Test Case:** Verify that "Basket" page loads from "Sweets" page correctly.

-   **Test Case:** Verify that main page loads from "About" page correctly.
-   **Test Case:** Verify that "Sweets" page loads from "About" page correctly.
-   **Test Case:** Verify that "Login" page loads from "About" page correctly.
-   **Test Case:** Verify that "Basket" page loads from "About" page correctly.

-   **Test Case:** Verify that main page loads from "Login" page correctly.
-   **Test Case:** Verify that "Sweets" page loads from "Login" page correctly.
-   **Test Case:** Verify that "About" page loads from "Login" page correctly.
-   **Test Case:** Verify that "Basket" page loads from "Login" page correctly.

-   **Test Case:** Verify that main page loads from "Basket" page correctly.
-   **Test Case:** Verify that "Sweets" page loads from "Basket" page correctly.
-   **Test Case:** Verify that "About" page loads from "Basket" page correctly.
-   **Test Case:** Verify that "Login" page loads from "Basket" page correctly.

## 2. Sweets Page

### Test Scenario: Viewing Products

-   **Test Case:** Verify that products are displayed correctly.
-   **Steps:**
    1. Navigate to the "Sweets" page.
    2. Ensure product images, names, and prices are visible.
-   **Expected Result:** All products are displayed correctly with necessary details.

  <!-- ### Test Scenario: Product Details Page
  - **Test Case:** Verify that clicking a product opens the details page.
  - **Steps:**
    1. Click on a product.
    2. Ensure the product details page opens with relevant information (name, price, description, add-to-cart button).
  - **Expected Result:** The product details page opens correctly with all necessary details. -->

## 3. Test Scenario: Cart Functionality

### Test case: Adding a Product to Cart

-   **Test Case:** Verify that a product can be added to the cart.
-   **Steps:**
    1. Navigate to a product's page.
    2. Click on "Add to Basket".
    3. Open the cart.
-   **Expected Result:** The product is added to the cart and appears in the cart section.

### Test case: Removing a Product from Cart

-   **Test Case:** Verify that a product can be removed from the cart.
-   **Steps:**
    1. Add a product to the cart.
    2. Click the "Delete item" button.
-   **Expected Result:** The product is removed from the cart successfully.

## 4. Checkout Process

### Test Scenario: Proceeding to Checkout

-   **Test Case:** Verify that users can proceed to checkout.
-   **Steps:**
    1. Add a product to the cart.
    2. Click on "Checkout".
    3. Enter necessary details (name, address, payment info).
    4. Click "Place Order".
-   **Expected Result:** The order is successfully placed, and a confirmation message is displayed.

## 5. User Authentication

### Test Scenario: User Registration

-   **Test Case:** Verify that new users can register.
-   **Steps:**
    1. Click on "Sign Up".
    2. Enter name, email, and password.
    3. Click "Register".
-   **Expected Result:** The user account is created, and a success message is displayed.

### Test Scenario: User Login

-   **Test Case:** Verify that existing users can log in.
-   **Steps:**
    1. Click on "Login".
    2. Enter email and password.
    3. Click "Login".
-   **Expected Result:** The user is successfully logged in.

  <!-- ## 6. Responsive Testing

  ### Test Scenario: Mobile View
  - **Test Case:** Verify that the website is responsive on mobile devices.
  - **Steps:**
    1. Open the website on a mobile device or use browser dev tools.
    2. Check if elements adjust correctly.
  - **Expected Result:** The website should be fully responsive and usable on mobile devices. -->

  <!-- ## 7. Performance Testing

  ### Test Scenario: Website Load Speed
  - **Test Case:** Verify that the website loads within an acceptable time.
  - **Steps:**
    1. Measure the time it takes for the homepage to fully load.
  - **Expected Result:** The website should load within 3-5 seconds. -->

---

**End of Test Scenarios and Cases**

1. TS_1 About Page

    TS_1 About Page Load:

    TC_1.1 Verify the page has the title 'Sweet Shop Project'.
    TC_1.2 Verify the page has a description.
    TC_1.3 Verify the page has a banner and it matches the year 2018.

2. Login Page

    TS_2.1 Login Page Load :

    TC_2.1.1 Verify the page title is 'Login'.
    TC_2.1.2 Verify the page has a description.
    TC_2.1.3 Verify the page contains 'email' and 'password' input fields.
    TC_2.1.4 Verify the page contains a 'Login' button.

    TS_2.2 Login Functionality :

    TC_2.2.1 Positive login.Enter valid email address and password, click Login, verify redirection to YOUR ACCOUNT page.
    TC_2.2.2 Positive login.Verify user info is displayed.
    TC_2.2.3 Negative login with wrong email.Verify user is not redirected YOUR ACCOUNT page.
    TC_2.2.4 Negative login with empty password.Verify user is not redirected YOUR ACCOUNT page.

3. Acccount page
4. Sweets Page

    TS_3 Sweets Page Load :

    TC_3.1 Verify the page title is 'Browse sweets'.
    TC_3.2 Verify the list of available products is displayed.
    TC_3.3 Verify each product has a name, price, and image.
    TC_3.4 Verify each product has an 'Add to Basket' button.
    TC_3.5 Click on 'Add to Basket' for a product, verify the basket icon count updates.

5. Basket Page

    TS_4.1 Adding Products to Basket :

    TC_4.1.1 Add products to basket.
    TC_4.1.1 Verify the basket count is updated.

    TS_4.2 Removing Products to Basket :

    TC_4.2.1. Remove item from basket
    TC_4.2.2. Verify the basket count is updated.
    TC_4.2.3. Empty basket.
    TC_4.2.4. Verify the basket is empty.

6. Checkout Process

    TS_5.1 Checkout Page Load:

    TC_5.1.1 Verify the checkout page is accessible.
    TC_5.1.2 Verify the page displays all basket items.

    TS_5.2 Completing Checkout:

    TC_5.2.1 Enter valid payment and shipping details.
    TC_5.2.2 Add shipping costs.
    TC_5.2.3 Verify checkout was successful.

#

## TS_1 Homepage

### TC_1.1 Verify that the homepage loads successfully.

-   **Steps:**
    1. Open the URL: [SweetShop](https://sweetshop.netlify.app/)
    2. Check if all elements (logo, navigation bar, banner, product list) are visible.
-   **Expected Result:** The homepage loads without errors, and all elements are displayed correctly.

## TS_2 Header (navigation bar)

### TC_2.1 Verify that "Sweets" page loads from main page correctly.

-   **Steps:**
    1. Open the URL: [SweetShop](https://sweetshop.netlify.app/)
    2. Click on navigation link "Sweets".
    3. Verify that the corresponding page opens.
-   **Expected Result:** Navigation link redirect to the correct page.

### TC_2.2 Verify that "About" page loads from main page correctly.

-   **Steps:**
    1. Open the URL: [SweetShop](https://sweetshop.netlify.app/)
    2. Click on navigation link "About".
    3. Verify that the corresponding page opens.
-   **Expected Result:** Navigation link redirect to the correct page.

### TC_2.3 Verify that "Login" page loads from main page correctly.

-   **Steps:**
    1. Open the URL: [SweetShop](https://sweetshop.netlify.app/)
    2. Click on navigation link "Login".
    3. Verify that the corresponding page opens.
-   **Expected Result:** Navigation link redirect to the correct page.

### TC_2.4 Verify that "Basket" page loads from main page correctly.

-   **Steps:**
    1. Open the URL: [SweetShop](https://sweetshop.netlify.app/)
    2. Click on navigation link "Basket".
    3. Verify that the corresponding page opens.
-   **Expected Result:** Navigation link redirect to the correct page.

### TC_2.5 Verify that main page loads from "Sweets" page correctly.

-   **Steps:**
    1. Open the URL: [SweetShop/sweets](https://sweetshop.netlify.app/sweets)
    2. Click on navigation link "Sweet Shop".
    3. Verify that the corresponding page opens.
-   **Expected Result:** Navigation link redirect to the correct page.

### TC_2.6 Verify that "About" page loads from "Sweets" page correctly.

-   **Steps:**
    1. Open the URL: [SweetShop/sweets](https://sweetshop.netlify.app/sweets)
    2. Click on navigation link "About".
    3. Verify that the corresponding page opens.
-   **Expected Result:** Navigation link redirect to the correct page.

### TC_2.7 Verify that "Login" page loads from "Sweets" page correctly.

-   **Steps:**
    1. Open the URL: [SweetShop/sweets](https://sweetshop.netlify.app/sweets)
    2. Click on navigation link "Login".
    3. Verify that the corresponding page opens.
-   **Expected Result:** Navigation link redirect to the correct page.

### TC_2.8 Verify that "Basket" page loads from "Sweets" page correctly.

-   **Steps:**
    1. Open the URL: [SweetShop/sweets](https://sweetshop.netlify.app/sweets)
    2. Click on navigation link "Basket".
    3. Verify that the corresponding page opens.
-   **Expected Result:** Navigation link redirect to the correct page.

### TC_2.9 Verify that main page loads from "About" page correctly.

-   **Steps:**
    1. Open the URL: [SweetShop/about](https://sweetshop.netlify.app/about)
    2. Click on navigation link "Sweet Shop".
    3. Verify that the corresponding page opens.
-   **Expected Result:** Navigation link redirect to the correct page.

### TC_2.10 Verify that "Sweets" page loads from "About" page correctly.

-   **Steps:**
    1. Open the URL: [SweetShop/about](https://sweetshop.netlify.app/about)
    2. Click on navigation link "Sweets".
    3. Verify that the corresponding page opens.
-   **Expected Result:** Navigation link redirect to the correct page.

### TC_2.11 Verify that "Login" page loads from "About" page correctly.

-   **Steps:**
    1. Open the URL: [SweetShop/about](https://sweetshop.netlify.app/about)
    2. Click on navigation link "Login".
    3. Verify that the corresponding page opens.
-   **Expected Result:** Navigation link redirect to the correct page.

### TC_2.12 Verify that "Basket" page loads from "About" page correctly.

-   **Steps:**
    1. Open the URL: [SweetShop/about](https://sweetshop.netlify.app/about)
    2. Click on navigation link "Basket".
    3. Verify that the corresponding page opens.
-   **Expected Result:** Navigation link redirect to the correct page.

### TC_2.13 Verify that main page loads from "Login" page correctly.

-   **Steps:**
    1. Open the URL: [SweetShop/login](https://sweetshop.netlify.app/login)
    2. Click on navigation link "Sweet Shop".
    3. Verify that the corresponding page opens.
-   **Expected Result:** Navigation link redirect to the correct page.

### TC_2.14 Verify that "Sweets" page loads from "Login" page correctly.

-   **Steps:**
    1. Open the URL: [SweetShop/login](https://sweetshop.netlify.app/login)
    2. Click on navigation link "Sweets".
    3. Verify that the corresponding page opens.
-   **Expected Result:** Navigation link redirect to the correct page.

### TC_2.15 Verify that "About" page loads from "Login" page correctly.

-   **Steps:**
    1. Open the URL: [SweetShop/login](https://sweetshop.netlify.app/login)
    2. Click on navigation link "About".
    3. Verify that the corresponding page opens.
-   **Expected Result:** Navigation link redirect to the correct page.

### TC_2.16 Verify that "Basket" page loads from "Login" page correctly.

-   **Steps:**
    1. Open the URL: [SweetShop/login](https://sweetshop.netlify.app/login)
    2. Click on navigation link "Basket".
    3. Verify that the corresponding page opens.
-   **Expected Result:** Navigation link redirect to the correct page.

### TC_2.17 Verify that main page loads from "Basket" page correctly.

-   **Steps:**
    1. Open the URL: [SweetShop/basket](https://sweetshop.netlify.app/basket)
    2. Click on navigation link "Sweet Shop".
    3. Verify that the corresponding page opens.
-   **Expected Result:** Navigation link redirect to the correct page.

### TC_2.18 Verify that "Sweets" page loads from "Basket" page correctly.

-   **Steps:**
    1. Open the URL: [SweetShop/basket](https://sweetshop.netlify.app/basket)
    2. Click on navigation link "Sweets".
    3. Verify that the corresponding page opens.
-   **Expected Result:** Navigation link redirect to the correct page.

### TC_2.19 Verify that "About" page loads from "Basket" page correctly.

-   **Steps:**
    1. Open the URL: [SweetShop/basket](https://sweetshop.netlify.app/basket)
    2. Click on navigation link "About".
    3. Verify that the corresponding page opens.
-   **Expected Result:** Navigation link redirect to the correct page.

### TC_2.20 Verify that "Login" page loads from "Basket" page correctly.

-   **Steps:**
    1. Open the URL: [SweetShop/basket](https://sweetshop.netlify.app/basket)
    2. Click on navigation link "Login".
    3. Verify that the corresponding page opens.
-   **Expected Result:** Navigation link redirect to the correct page.

## TS_3 Sweets Page

### TC_3.1 Verify the page title is 'Browse sweets'.

-   **Steps:**
    1. Open the URL: [SweetShop/sweets](https://sweetshop.netlify.app/sweets)
    2. Verify the page title 'Browse sweets' is visible.
-   **Expected Result:** Page title 'Browse sweets' is visible.

### TC_3.2 Verify the list of available products is displayed.

-   **Steps:**
    1. Open the URL: [SweetShop/sweets](https://sweetshop.netlify.app/sweets)
    2. Verify the list of available products is displayed.
-   **Expected Result:** List of available products is displayed.

### TC_3.3 Verify each product has a name, price, image and 'Add to Basket' button.

-   **Steps:**
    1. Open the URL: [SweetShop/sweets](https://sweetshop.netlify.app/sweets)
    2. Verify each product has a name, price, image and 'Add to Basket' button.
-   **Expected Result:** Each product has a name, price, image and 'Add to Basket' button.

## TS_4 About Page

### TC_4.1 Verify the page has the title 'Sweet Shop Project'.

-   **Steps:**
    1. Open the URL: [SweetShop/about](https://sweetshop.netlify.app/about)
    2. Verify the page has the title 'Sweet Shop Project'.
-   **Expected Result:** Page has the title 'Sweet Shop Project'.

### TC_4.2 Verify the page has a description.

-   **Steps:**
    1. Open the URL: [SweetShop/about](https://sweetshop.netlify.app/about)
    2. Verify the page has a description.
-   **Expected Result:** Page has a description.

### TC_4.3 Verify the page has a banner and it matches the year 2018.

-   **Steps:**
    1. Open the URL: [SweetShop/about](https://sweetshop.netlify.app/about)
    2. Verify the page has a banner and it matches the year 2018.
-   **Expected Result:** Page has a banner and it matches the year 2018.

## TS_5 Login Page

### TC_5.1 Verify the page title is 'Login'.

-   **Steps:**
    1. Open the URL: [SweetShop/login](https://sweetshop.netlify.app/login)
    2. Verify the page title is 'Login'.
-   **Expected Result:** Page title is 'Login'.

### TC_5.2 Verify the page has a description.

-   **Steps:**
    1. Open the URL: [SweetShop/login](https://sweetshop.netlify.app/login)
    2. Verify the page has a description.
-   **Expected Result:** Page has a description.

### TC_5.3 Verify the page contains 'email' and 'password' input fields.

-   **Steps:**
    1. Open the URL: [SweetShop/login](https://sweetshop.netlify.app/login)
    2. Verify the page contains 'email' and 'password' input fields.
-   **Expected Result:** Page contains 'email' and 'password' input fields.

### TC_5.4 Verify the page contains a 'Login' button.

-   **Steps:**
    1. Open the URL: [SweetShop/login](https://sweetshop.netlify.app/login)
    2. Verify the page contains a 'Login' button.
-   **Expected Result:** Page contains a 'Login' button.

### TC_5.5 Verify links to Twitter, Facebook, Linkedin.

-   **Steps:**
    1. Open the URL: [SweetShop/login](https://sweetshop.netlify.app/login)
    2. Verify links to Twitter, Facebook, Linkedin links to appropriate websites.
-   **Expected Result:** Links to Twitter, Facebook, Linkedin links to appropriate websites.

### TC_5.6 Positive with valid data

-   **Steps:**
    1. Open the URL: [SweetShop/login](https://sweetshop.netlify.app/login)
    2. Enter valid email and password and click 'Login' button.
-   **Expected Result:** Login is successful, you are logged in to "Your Account" page.

### TC_5.7 Negative with wrong email format

-   **Steps:**
    1. Open the URL: [SweetShop/login](https://sweetshop.netlify.app/login)
    2. Enter invalid email and click 'Login' button.
-   **Expected Result:** Login is not successful, "Please enter a valid email address." message appears.

### TC_5.8 Negative with empty email

-   **Steps:**
    1. Open the URL: [SweetShop/login](https://sweetshop.netlify.app/login)
    2. Login with empty email field.
-   **Expected Result:** Login is not successful, "Please enter a valid email address." message appears.

### TC_5.9 Negative with empty password

-   **Steps:**
    1. Open the URL: [SweetShop/login](https://sweetshop.netlify.app/login)
    2. Login with empty password field.
-   **Expected Result:** Login is not successful, "Please enter a valid password." message appears.

### TC_5.10 Negative with empty email and empty password

-   **Steps:**
    1. Open the URL: [SweetShop/login](https://sweetshop.netlify.app/login)
    2. Login with empty email and password fields.
-   **Expected Result:** Login is not successful, "Please enter a valid email address." and "Please enter a valid password." messages appears.

## TS_6 Account page

### TC_6.1. Positive login. Verify user info is displayed.

-   **Steps:**
    1. Open the URL: [SweetShop/login](https://sweetshop.netlify.app/login)
    2. Enter valid email and password and click 'Login' button.
    3. Verify user info is displayed.
-   **Expected Result:** Login is successful and user info is displayed.

## TS_7 Basket Page (Cart)

### TC_7.1 Add products to basket and the basket count is updated.

-   **Steps:**
    1. Open the URL: [SweetShop/sweets](https://sweetshop.netlify.app/sweets)
    2. Click 'Add to Basket' button on various products.
    3. Verify products are added to basket and count is updated.
-   **Expected Result:** Products are added to basket and count is updated.

### TC_7.2 Add products to basket with delivery 'Collect(FREE)' (quantity, names, total).

-   **Steps:**
    1. Open the URL: [SweetShop/sweets](https://sweetshop.netlify.app/sweets)
    2. Click 'Add to Basket' button on various products.
    3. Open the URL: [SweetShop/basket](https://sweetshop.netlify.app/basket)
    4. Pick delivery option 'Collect(FREE)' and verify products are added and "Total" amount is correct.
-   **Expected Result:** Products are added and "Total" amount is correct.

### TC_7.3 Add products to basket with delivery 'Standard shipping (1.99)' (quantity, names, total).

-   **Steps:**
    1. Open the URL: [SweetShop/sweets](https://sweetshop.netlify.app/sweets)
    2. Click 'Add to Basket' button on various products.
    3. Open the URL: [SweetShop/basket](https://sweetshop.netlify.app/basket)
    4. Pick delivery option 'Standard shipping (1.99)' and verify products are added and "Total" amount is correct.
-   **Expected Result:** Products are added and "Total" amount is correct.

### TC_7.4 Remove item from basket and verify the basket count is updated.

-   **Steps:**
    1. Open the URL: [SweetShop/basket](https://sweetshop.netlify.app/basket)
    2. Remove item from basket and verify the basket count is updated.
-   **Expected Result:** Item is removed and basket count is updated.

### TC_7.5 Empty basket and verify the basket is empty.

-   **Steps:**
    1. Open the URL: [SweetShop/basket](https://sweetshop.netlify.app/basket)
    2. Remove all items from basket and verify basket is empty.
-   **Expected Result:** Basket is empty.
