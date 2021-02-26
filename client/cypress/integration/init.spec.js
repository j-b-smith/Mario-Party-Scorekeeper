 /* eslint-disable */

describe('Test Mario Party Score Keeper', () => {   

    //Navigate home before each test
    beforeEach(() => {
        cy.visit('/')      
    })

    it('Can navigate with navbar', () => {

        //For each game link
        //Click navbar link, assert url includes path
        cy.get('.nav-bar-link').eq(0).click();
        cy.url().should('include', `/marioparty1`);

        cy.get('.nav-bar-link').eq(1).click();
        cy.url().should('include', `/marioparty2`);

        cy.get('.nav-bar-link').eq(2).click();
        cy.url().should('include', `/marioparty3`);

        cy.get('.nav-bar-link').eq(3).click();
        cy.url().should('include', `/marioparty4`);

        cy.get('.nav-bar-link').eq(4).click();
        cy.url().should('include', `/marioparty5`);

        cy.get('.nav-bar-link').eq(5).click();
        cy.url().should('include', `/marioparty6`);

        cy.get('.nav-bar-link').eq(6).click();
        cy.url().should('include', `/marioparty7`);

    })

    it('Can navigate with game logo links', () => {

        //For each game link
        //Click game link, assert url includes path
        //Navigate home

        cy.get('.game-links').find('a').eq(0).click();
        cy.url().should('include', `/marioparty1`);
        cy.visit('/');

        cy.get('.game-links').find('a').eq(1).click();
        cy.url().should('include', `/marioparty2`);
        cy.visit('/');

        cy.get('.game-links').find('a').eq(2).click();
        cy.url().should('include', `/marioparty3`);
        cy.visit('/');

        cy.get('.game-links').find('a').eq(3).click();
        cy.url().should('include', `/marioparty4`);
        cy.visit('/');

        cy.get('.game-links').find('a').eq(4).click();
        cy.url().should('include', `/marioparty5`);
        cy.visit('/');

        cy.get('.game-links').find('a').eq(5).click();
        cy.url().should('include', `/marioparty6`);
        cy.visit('/');

        cy.get('.game-links').find('a').eq(6).click();
        cy.url().should('include', `/marioparty7`);
    })

    it('Can navigate home with logo image link', () => {

        //Navigate to game page
        cy.visit('/marioparty1');

        //Click logo image link
        cy.get('.nav-img').click();

        //Assert url is equal to home page
        expect(cy.url().should('equal', 'http://localhost:3000/'));
    })

    it ('Can expand new game form', () => {

        //Navigate to game page, expand form
        cy.get('.nav-bar-link').eq(0).click();
        cy.get('.expand-button').click();
        
        //Assert form is visible
        expect(cy.get('form').should('be.visible'));
    })

    it ('Can collapse new game form', () => {
        
        //Navigate to game page, expand form, collapse form
        cy.get('.nav-bar-link').eq(0).click();
        cy.get('.expand-button').click();
        cy.get('.expand-button').click();
        
        //Assert the form is not visible
        expect(cy.get('form').should('not.be.visible'));
    })

    it ('Can select game boards', () => {

        //Navigate to game page and expand form
        cy.visit('/marioparty2');
        cy.get('.expand-button').click();

        //Select each game board and assert the game board is checked
        cy.get('.board-selection').each(($el, index) => {
            cy.wrap($el).click();
            cy.wrap($el).get('input').eq(index).should('be.checked');
        })
    })

    it ('Can select characters', () => {
        
        //Navigate to game page and expand form
        cy.visit('/marioparty1');
        cy.get('.expand-button').click();

        //Select Mario from each drop-down and assert the selected option is 'Mario"
        cy.get('select').each(($select) => {
            cy.wrap($select).select('Mario');
            cy.wrap($select).find('option:selected').should('have.text', 'Mario');
        })
    })

    it ('Can prevent non-numbers in stars field', () => {
        
        //Navigate to game page and expand form
        cy.visit('/marioparty1');
        cy.get('.expand-button').click();

        //Assert each star input blank after entering letters and symbols
        cy.get('input[name="stars"]').each(($input) => {
            cy.wrap($input).type('hello');
            cy.wrap($input).should('have.value', '');

            cy.wrap($input).type('*&^%$#@!()+_}{[]');
            cy.wrap($input).should('have.value', '');
        })
    })

    it ('Can prevent non-numbers in coins field', () => {
        
        //Navigate to game page and expand form
        cy.visit('/marioparty1');
        cy.get('.expand-button').click();

        //Assert each coin input blank after entering letters and symbols
        cy.get('input[name="coins"]').each(($input) => {
            cy.wrap($input).type('hello');
            cy.wrap($input).should('have.value', '');

            cy.wrap($input).type('*&^%$#@!()+_}{[]');
            cy.wrap($input).should('have.value', '');
        })
    })

    it ('Can prevent negative numbers in stars field', () => {
        
        //Navigate to game page and expand form
        cy.visit('/marioparty1');
        cy.get('.expand-button').click();

        //Assert each star input is blank after entering negative
        cy.get('input[name="stars"]').each(($input) => {
            cy.wrap($input).type('-1');
            cy.wrap($input).should('have.value', '');
        })
    })

    it ('Can prevent negative numbers in coins field', () => {
        
        //Navigate to game page and expand form
        cy.visit('/marioparty1');
        cy.get('.expand-button').click();
        
        //Assert each coin sinput is blank after entering negative
        cy.get('input[name="coins"]').each(($input) => {
            cy.wrap($input).type('-1');
            cy.wrap($input).should('have.value', '');
        })
    })

    it ('Can prevent submission of empty form', () => {
        
        //Navigate to game page and expand form
        cy.visit('/marioparty2');
        cy.get('.expand-button').click();

        //Submit blank form
        cy.get('form').find('button').click();
        
        //Assert validation alert is visible and close alert with button
        cy.get('.validation-alert').should('be.visible').find('button').should('have.text', 'Ok').click()
    })

    it ('Can prevent submission of form without character selection', () => {

        //Navigate to game page and expand form
        cy.visit('/marioparty2');
        cy.get('.expand-button').click();

        //Select the game board
        cy.get('.board-selection').first().click();
        
        //Complete form fields for each player
        cy.get('.player').each(($player, index) => {

            //Input names
            cy.wrap($player).find('input[name="name"]').type('Test');

            //Input stars
            cy.wrap($player).find('input[name="stars"]').type(`${Math.floor(Math.random() * 101)}`);
            
            //Input coins
            cy.wrap($player).find('input[name="coins"]').type(`${Math.floor(Math.random() * 101)}`);
        })
    
        //Submit form
        cy.get('form').find('button').click();

        //Assert validation alert is visible and close alert with button
        cy.get('.validation-alert').should('be.visible').find('button').should('have.text', 'Ok').click();

    })

    it('Can prevent submission of form without board selection', () => {
        
        //Navigate to game page and expand form
        cy.visit('/marioparty2');
        cy.get('.expand-button').click();

        //Complete form fields for each player
        cy.get('.player').each(($player, index) => {

            //Input names
            cy.wrap($player).find('input[name="name"]').type('Test');

            //Select characters
            cy.wrap($player)
                .find('select')
                .each(($select) => {
                    cy.wrap($select)
                        .find('option')
                        .eq(index + 1)
                        .then(option => 
                            cy.wrap($select)
                            .select(option.val()));
            })

            //Input stars
            cy.wrap($player).find('input[name="stars"]').type(`${Math.floor(Math.random() * 101)}`);
            
            //Input coins
            cy.wrap($player).find('input[name="coins"]').type(`${Math.floor(Math.random() * 101)}`);
        })
        
        //Submit form
        cy.get('form').find('button').click();

        //Assert validation alert is visible and close alert with button
        cy.get('.validation-alert').should('be.visible').find('button').should('have.text', 'Ok').click();

    })

    it('Can prevent submission with any blank fields', () => {
        
        //Navigate to game page and expand form
        cy.visit('/marioparty2');
        cy.get('.expand-button').click();
        
        //Select game board
        cy.get('.board-selection').first().click();

        //Complete form fields for each player
        cy.get('.player').each(($player, index) => {

            //Input names
            cy.wrap($player).find('input[name="name"]').type('Test');

            //Select characters
            cy.wrap($player)
                .find('select')
                .each(($select) => {
                    cy.wrap($select)
                        .find('option')
                        .eq(index + 1)
                        .then(option => 
                            cy.wrap($select)
                            .select(option.val()));
            })

            //Input stars
            cy.wrap($player).find('input[name="stars"]').type(`${Math.floor(Math.random() * 101)}`);
            
            //Input coins
            cy.wrap($player).find('input[name="coins"]').type(`${Math.floor(Math.random() * 101)}`);
        })

        //Delete stars from player one
        cy.get('.player').eq(0).find('input[name="stars"]').clear();
        
        //Submit form
        cy.get('form').find('button').click();

        //Assert validation alert is visible and close alert with button
        cy.get('.validation-alert').should('be.visible').find('button').should('have.text', 'Ok').click();

    })

        

    it ('Can add games', () => {

        //Navigate to game page and expand form
        cy.visit('/marioparty2');
        cy.get('.expand-button').click();

        //Select the game board
        cy.get('.board-selection').first().click();

        //Complete form fields for each player
        cy.get('.player').each(($player, index) => {

            //Input names
            cy.wrap($player).find('input[name="name"]').type('Test');

            //Select characters
            cy.wrap($player)
                .find('select')
                .each(($select) => {
                    cy.wrap($select)
                        .find('option')
                        .eq(index + 1)
                        .then(option => 
                            cy.wrap($select)
                              .select(option.val()));
            })

            //Input stars
            cy.wrap($player).find('input[name="stars"]').type(`${Math.floor(Math.random() * 101)}`);
            
            //Input coins
            cy.wrap($player).find('input[name="coins"]').type(`${Math.floor(Math.random() * 101)}`);
        })
        
        //Submit form
        cy.get('form').find('button').click();

        //Wait for games to re-populate
        cy.wait(1000);

        //Verify game was created here
        cy.get('.game-div').last().find('.player-name-content').each(($player) => {
            cy.wrap($player).should('have.text', 'Test');
        });
    })


    it('Can cancel delete game', () => {

        //Navigate to page and allow games to populate
        cy.visit('/marioparty2');
        cy.wait(1000);

        //Click last game delete button
        cy.get('.game-div').last().find('.game-button-delete').click();

        //Click confirm delete button
        cy.get('.alert').find('button').contains('No').click();

        //Confirm game has not been deleted
        cy.get('.game-div').last().find('.player-name-content').each(($player) => {
            cy.wrap($player).should('have.text', 'Test');
        });
    })

    it('Can delete games', () => {

        //Navigate to page and allow games to populate
        cy.visit('/marioparty2');
        cy.wait(1000);

        //Click last game delete button
        cy.get('.game-div').last().find('.game-button-delete').click();

        //Click confirm delete button
        cy.get('.alert').find('button').contains('Yes').click();

        // //Confirm game has been deleted **Needs to be unique?? Detached from dom since div is gone**
        // cy.get('.game-div').last().find('.player-name-content').each(($player) => {
        //     cy.wrap($player).should('not.have.text', 'Test');
        // });
    })

    /*  Edit game is not updating fields, only game board */
    /* Edit game is allowing blank fields. Expected to be due to React issue described above */

    // it ('Can cancel edit games', () => {

    //     //Navigate to game page
    //     cy.visit('/marioparty2')
    //     cy.wait(1000);

    //     //Get current game board
    //     //Can't store original board?? Returning object
    //     //Get the checked item instead of the visible text??
    //     let originalBoard = null;
    //     cy.get('.game-div').last().find('.game-header').find('span').eq(0).invoke('text').then((text) => {
    //         originalBoard = text;
    //     });

    //     //Get last game and click edit
    //     cy.get('.game-div').last().find('.game-button-edit').click();

    //     //Select the game board
    //     cy.get('.edit-game').find('.board-selection').last().click();

    //     //Click the cancel action
    //     cy.get('.edit-game').find('.form-button-container').find('button').contains('Cancel').click();

    //     //Assert game board remains unchanged
    //     cy.get('.game-div').last().find('.game-header').find('span').eq(0).should('have.text', originalBoard);
    // })

    // it('Can prevent edit with empty fields', () => {
    //     //Navigate to game page
    //     cy.visit('/marioparty2')
    //     cy.wait(1000);
        
    //     //Get last game and click edit
    //     cy.get('.game-div').last().find('.game-button-edit').click();


    //     //Clear first player stars field
    //     cy.wrap($player).find('input[name="stars"]').eq(0).clear();

    //     //Save changes
    //     cy.get('.edit-game').find('.form-button-container').find('button').contains('Save Changes').click();

    // })

    // it('Can edit games', () => {

    // })

 })