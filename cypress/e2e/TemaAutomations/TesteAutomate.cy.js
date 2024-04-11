context("Assertions", () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com');
      });

      describe('Teste SauceDemo', () =>  {

        // testul nr 1 

        it ("Login test with incorrect username or password", () => {
    
            cy.get('#user-name').type('standard_user');
            cy.get('#password').type('secret_sauce2');
            cy.get('#login-button').click();
    
            cy.get(".error-message-container.error h3").contains("Username and password do not match any user in this service");
        });
    
        //testul nr 2 

        it ("Login test with correct username or password", () => {
    
            cy.get('#user-name').type('standard_user');
            cy.get('#password').type('secret_sauce');
            cy.get('#login-button').click();
    
            cy.get("#logout_sidebar_link").should("exist");
        });
    
        //testul nr 3 

        it('logout test', () => {

            cy.get('#user-name').type('standard_user');
            cy.get('#password').type('secret_sauce');
            cy.get('#login-button').click();
            cy.get("#react-burger-menu-btn").click();
            cy.get("#logout_sidebar_link").click();

            cy.get("#login-button").should("exist");
        });
    
        //testul nr 4 
        it ('test to verify if the sidebar menu can be opened and closed', () => {


            cy.get('#user-name').type('standard_user');
            cy.get('#password').type('secret_sauce');
            cy.get('#login-button').click();
            cy.get('#react-burger-menu-btn').click();

            cy.get(".bm-menu-wrap").should("be.visible");

            cy.get("#react-burger-cross-btn").click();

            cy.get(".bm-menu-wrap").should("not.be.visible");

        });


        //testul nr 5 

        it('test for adding a product to the cart', () => {

            cy.get('#user-name').type('standard_user');
            cy.get('#password').type('secret_sauce');
            cy.get('#login-button').click();
            cy.get('#add-to-cart-sauce-labs-fleece-jacket').click();
            cy.get('.shopping_cart_link').click();

            cy.get("#item_5_title_link").should("exist").contains("Sauce Labs Fleece Jacket");
        });

        //testul nr 5 

        it("Test for removing a product from the cart",() => {

            cy.get('#user-name').type('standard_user');
            cy.get('#password').type('secret_sauce');
            cy.get('#login-button').click();
            cy.get('#add-to-cart-sauce-labs-fleece-jacket').click();
            cy.get('.shopping_cart_link').click();

            cy.get("#item_5_title_link").should("exist").contains("Sauce Labs Fleece Jacket");
            cy.get("#remove-sauce-labs-fleece-jacket").click();
            cy.get(".shopping_cart_link").click();

            cy.get("#item_5_title_link").should("not.exist");

            
        });

        //testul nr 7 

        it("Test to verify if you can place an order for a product",() => {
            cy.get('#user-name').type('standard_user');
            cy.get('#password').type('secret_sauce');
            cy.get('#login-button').click();
            cy.get('#add-to-cart-sauce-labs-fleece-jacket').click();
            cy.get('.shopping_cart_link').click();

            cy.get("#item_5_title_link").should("exist").contains("Sauce Labs Fleece Jacket");
            cy.get('#checkout').click();
            cy.get("#first-name").type("standard").click();
            cy.get("#last-name").type('user').click();
            cy.get("#postal-code").type("307160").click();
            cy.get("#continue").click();
            cy.get(".summary_info_label").should("exist").contains('Payment Information:');
            cy.get("#finish").click();
            cy.get(".complete-header").should("exist").contains("Thank you for your order!");


        })

        //testul nr 8 

        it("Test to verify if you can access the page with the details of a product",() => {
            cy.get('#user-name').type('standard_user');
            cy.get('#password').type('secret_sauce');
            cy.get('#login-button').click();
            cy.get('.inventory_item_name').should("exist");

            cy.get("#item_5_title_link").click();
            cy.get(".inventory_details_desc.large_size").should("exist").contains("It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.");
            
    
    
    })

        //testul nr 9
        
        it("Test if the 'Back to products' button on a product page takes you to the main page", () => {
            cy.get('#user-name').type('standard_user');
            cy.get('#password').type('secret_sauce');
            cy.get('#login-button').click();
            cy.get('.inventory_item_name').should("exist");

            cy.get("#item_5_title_link").click();
            cy.get("#back-to-products").should("exist").click();
            cy.get(".title").should("exist").contains("Products");
    
            cy.get("#inventory_container").should("exist");
    
        });

    });
});

    









