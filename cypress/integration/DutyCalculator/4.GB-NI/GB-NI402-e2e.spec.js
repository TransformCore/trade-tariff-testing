// 🚫 Trade Remedies - 🚫  0% MFN EU tariff - ✅  Trader Scheme - ✅  Final use in NI - ✅ Non processing 
// Comm code :0702000007

describe('| GB-NI402-e2e.spec | GB to NI route 🚐 02  - 🚫 Trade Remedies - 🚫  0% MFN EU tariff - ✅  Trader Scheme - ✅  Final use in NI - ✅ Non processing |',function(){
    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])

    it('e2e GB to NI ',function(){
        //select future date 
        cy.visit('/0702000007/import-date')
        cy.contains('Trade Tariff Duty Calculator')
        cy.ValidDate()
        cy.contains('Continue').click()
        cy.contains('Which part of the UK are you importing into?')
        // check URL 

        //select NI as country of destination
        cy.get('#wizard-steps-import-destination-import-destination-xi-field').check()
        cy.contains('Continue').click()
        cy.contains('Which country are the goods dispatched from?')

        //select United Kingdom as country of Origin       
        cy.get('#wizard-steps-country-of-origin-country-of-origin-field')
         .click().clear().wait(500)
         .type('United Kingdom').wait(500)
        cy.get('#wizard-steps-country-of-origin-country-of-origin-field__option--2')
         .click()
        cy.contains('Continue').click()

        // ✅  Trader Scheme Registered - Yes 
        cy.contains('Are you registered with the UK Trader Scheme?')
        //Select Yes, I am registered with the UK Trader Scheme
        cy.get("div:nth-of-type(1) > input[name='wizard_steps_trader_scheme[trader_scheme]']").check()
        cy.contains('Continue').click()

        // ✅  Final use in NI - Yes 
        cy.contains('Is your import for sale to, or final use by, end-consumers located in the United Kingdom?')
        //Select Yes, I am importing this good into Northern Ireland for its sale to, or final use by, end-consumers located in the United Kingdom
        cy.get("div:nth-of-type(1) > input[name='wizard_steps_final_use[final_use]']").check()
        cy.contains('Continue').click()


        // ✅ Non processing - Yes 
        //Select - The goods will be sold to an end-user without any processing
        cy.get("#wizard-steps-planned-processing-planned-processing-without-any-processing-field").check()
        cy.contains('Continue').click()
         // *** Page Validation ***

        // selection is persisted 
        cy.go(-1)
        cy.get("#wizard-steps-planned-processing-planned-processing-without-any-processing-field")
            .parent()
            .find('input')
            .should('be.checked')

        //Select - The importer had a total annual turnover of less than £500,000 in its most recent complete financial year
        cy.get("#wizard-steps-planned-processing-planned-processing-annual-turnover-field").check()
        cy.contains('Continue').click()
         // *** Page Validation ***

        // selection is persisted 
        cy.go(-1)
        cy.get("#wizard-steps-planned-processing-planned-processing-annual-turnover-field")
            .parent()
            .find('input')
            .should('be.checked')

        // Select - The goods will undergo commercial processing for one of these purposes
        cy.get("#wizard-steps-planned-processing-planned-processing-commercial-processing-field").check()
        cy.contains('Continue').click()
        // selection is persisted 
        cy.go(-1)
        cy.get("#wizard-steps-planned-processing-planned-processing-commercial-processing-field")
            .parent()
            .find('input')
            .should('be.checked')

            // *** Page Validation ***


    })
})