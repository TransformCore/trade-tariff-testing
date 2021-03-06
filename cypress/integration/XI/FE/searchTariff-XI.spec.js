describe(' 🇪🇺 💡 🔍 | searchTariff-XI |Search the Tariff - XI |',function() {

    Cypress.config('baseUrl', Cypress.config('services')['xi'])

    it('XI - Search Commodity by name ', function () {
        cy.visit('/sections')
        //changes made on 11/02/2021
        cy.contains('Northern Ireland Online Tariff: look up commodity codes, duty and VAT rates')
        //changes made on 11/02/2021
        cy.get('.govuk-header__navigation ').contains('Search or browse the Tariff')
        //changes made on 11/02/2021
        cy.get('.govuk-label')
            .contains('Search the Northern Ireland Online Tariff')

        cy.get('.js-commodity-picker-select').click().type('gherkins')
        cy.wait(750)
        cy.get('input[name=\'new_search\']').click()
        cy.wait(200)
        cy.contains('Search results for ‘gherkins’')
    })

    it('XI - Search Commodity by code ', function () {
        cy.visit('/sections')
        cy.contains('Northern Ireland Online Tariff: look up commodity codes, duty and VAT rates')
        cy.get('.govuk-label')
            .contains('Search the Northern Ireland Online Tariff')
        cy.get('.js-commodity-picker-select').click().type('3808941000')
        cy.wait(700)
        cy.get('input[name=\'new_search\']').click()
        cy.wait(200)
        cy.contains('Commodity information for 3808941000')
    })


    it('XI - Search Commodity by heading code - displays headings page', function () {
        cy.visit('/sections')
        cy.contains('Northern Ireland Online Tariff: look up commodity codes, duty and VAT rates')
        cy.get('.js-commodity-picker-select').click().type('38089410')
        cy.wait(750)
        cy.get('input[name=\'new_search\']').click()
        cy.contains('Choose the commodity code below that best matches your goods to see more information')
    })
    it('XI - Search unknown commodity ', function () {
        cy.visit('/sections')
        cy.contains('Northern Ireland Online Tariff: look up commodity codes, duty and VAT rates')
        cy.get('.js-commodity-picker-select').click().type('sdfdasdfafsfdfsfsfffsdfsfsfsfsafasfsfsafsafsdfsdfdsaf')
        cy.wait(750)
        cy.get('input[name=\'new_search\']').wait(200).click()
        cy.contains('Search results for ‘sdfdasdfafsfdfsfsfffsdfsfsfsfsafasfsfsafsafsdfsdfdsaf’')
        cy.contains('There are no results matching your query.')
        cy.get('.govuk-header__link')
            .contains('Search or browse the Tariff').click()
        cy.contains('All sections')
    })
    it('XI - Import tab - text',function(){
        cy.visit('commodities/2009909500#import')
        cy.get('.govuk-heading-m')
            .contains('Measures and restrictions for exporting goods from Northern Ireland')
        cy.get('.govuk-label')
            .contains('NI imports from')
    })
    it('XI - Export tab - text',function(){
        cy.visit('commodities/2009909500#export')
        cy.get('.govuk-heading-m')
            .contains('Measures and restrictions for exporting goods from Northern Ireland')
        cy.get('.govuk-label')
            .contains('NI exports to')
    })
})