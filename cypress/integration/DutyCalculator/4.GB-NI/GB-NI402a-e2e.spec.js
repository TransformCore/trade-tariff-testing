// 🚫 Trade Remedies - 🚫  0% MFN EU tariff - ✅  Trader Scheme - ✅  Final use in NI - ✅ Non processing 
// Comm code :0702000007

describe('| GB-NI402a-e2e.spec | GB to NI route 🚐 02  - 🚫 Trade Remedies - 🚫  0% MFN EU tariff - ✅  Trader Scheme - ✅  Final use in NI - ✅ Non processing |',function(){
    Cypress.config('baseUrl', Cypress.config('services')['dutycal'])

    it('e2e GB to NI ',function(){
        //select future date 
        cy.visit('/0702000007/import-date')
        cy.contains('Trade Tariff Duty Calculator')
        cy.ValidDate()
        cy.contains('Continue').click()
        cy.wait(1000)
        cy.contains('Which part of the UK are you importing into?')
        // check URL 

        //select NI as country of destination
        cy.get('#wizard-steps-import-destination-import-destination-xi-field').check()
        cy.contains('Continue').click()
        cy.wait(1000)
        cy.contains('Which country are the goods dispatched from?')

        //select United Kingdom as country of Origin       
        cy.get('#wizard-steps-country-of-origin-country-of-origin-field')
         .click().clear().wait(500)
         .type('United Kingdom').wait(500)
        cy.get('#wizard-steps-country-of-origin-country-of-origin-field__option--2')
         .click()
        cy.contains('Continue').click()
        cy.wait(1000)

        // ✅  Trader Scheme Registered - Yes 
        cy.contains('Are you registered with the UK Trader Scheme?')
        //Select Yes, I am registered with the UK Trader Scheme
        cy.get("div:nth-of-type(1) > input[name='wizard_steps_trader_scheme[trader_scheme]']").check()
        cy.contains('Continue').click()
        cy.wait(1000)

        // ✅  Final use in NI - Yes 
        cy.contains('Is your import for sale to, or final use by, end-consumers located in the United Kingdom?')
        //Select Yes, I am importing this good into Northern Ireland for its sale to, or final use by, end-consumers located in the United Kingdom
        cy.get("div:nth-of-type(1) > input[name='wizard_steps_final_use[final_use]']").check()
        cy.contains('Continue').click()
        cy.wait(1000)


        // ✅ Non processing - Yes 
        // First Option selected 
        //Select - The goods will be sold to an end-user without any processing
        cy.get("#wizard-steps-planned-processing-planned-processing-without-any-processing-field").check()
        cy.contains('Continue').click()
        cy.wait(1000)
         // duty page validation 
         cy.contains('There is no import duty to pay')
         cy.contains('There is no import duty to pay because:')
         cy.contains('You are transporting goods from England, Scotland or Wales to Northern Ireland')
         cy.contains('You are a member of the Uk Trader Scheme')
         cy.contains('Your import is for sale to, or final use by, end-consumers located in Northern Ireland')
         cy.contains('You do not intend to further process the goods on arrival in Northern Ireland')
         cy.contains('You may be called upon to provide proof of your membership of the UK Trader Scheme and that your goods are not going to be subject to further processing.')

        cy.wait(1000)
        // selection is persisted 
        cy.contains('Back').click()
        cy.wait(1000)
        cy.get("#wizard-steps-planned-processing-planned-processing-without-any-processing-field")
            .parent()
            .find('input')
            .should('be.checked')

        cy.contains('Continue').click()
        cy.wait(1000)
        cy.contains('Start again').click()
        cy.contains('When will the goods be imported?')

        


    })
})