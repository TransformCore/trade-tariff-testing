describe('🇬🇧 💡 Check specific quota order details',function(){
    Cypress.config('baseUrl')

    it(' UK quota numbers post 1 Jan 2021 -054xxx Licensed', function () {
        cy.visit('/commodities/0201100021#import')
        cy.get('.govuk-tabs__panel')
            cy.contains('Non preferential tariff quota')
        cy.get('.table-line')
            cy.contains('054002').click()
        cy.get('.tariff-info')
            .contains('Information on the availability of this quota can be obtained from the Rural Payments Agency.')
        cy.get('.close [href]').click()
    })

    it(' UK quota numbers post 1 Jan 2021 -052xxx Non-Licensed', function () {
        cy.visit('/commodities/0201100021#import')
        cy.get('.govuk-tabs__panel')
        cy.contains('Non preferential tariff quota')
        cy.get('.table-line')
        cy.contains('052201').click()
        cy.get('.tariff-info')
            .contains('Order number 052201')
        cy.get('.close [href]').click()
    })
    it(' UK quota numbers post 1 Jan 2021 -058xxx Non-Licensed', function () {
        cy.visit('/commodities/0201100021#import')
        cy.get('.govuk-tabs__panel')
        cy.contains('Non preferential tariff quota')
        cy.get('.table-line')
        cy.contains('058400').click()
        cy.get('.tariff-info')
            .contains('Order number 058400')
        cy.get('.close [href]').click()
    })

    it('Quota information available - litres ', function () {
        cy.visit('/commodities/2202991111#import')
        cy.get('.govuk-tabs__panel')
        cy.contains('Preferential tariff quota')
        cy.get('.table-line')
        cy.contains('050709').click()
        cy.get('.tariff-info').focus()
            .contains('Order number 050709')
        cy.contains('Balance')
        cy.contains('3000.0')
        cy.contains('Initial amount')
        cy.contains('3000.0')
        cy.contains('Status')
        cy.contains('Open')
        cy.contains('Unit')
        cy.contains('Litre (l)')
        cy.get('.close [href]').click()
    })

    it('Quota information available - kilogram ', function () {
        cy.visit('/commodities/2302101000#import')
        cy.get('.govuk-tabs__panel')
        cy.contains('Preferential tariff quota')
        cy.get('.table-line')
        cy.contains('056711').click()
        cy.get('.tariff-info').focus()
            .contains('Order number 056711')
        cy.contains('Balance')
        cy.contains('2860000.0')
        cy.contains('Initial amount')
        cy.contains('2860000.0')
        cy.contains('Status')
        cy.contains('Open')
        cy.contains('Unit')
        cy.contains('Kilogram (kg)')
        cy.get('.close [href]').click()
    })
    it('Quota information available - New Quota - Eastern and Southern Africa States ', function () {
        cy.visit('/commodities/1604207094#import')
        cy.get('.govuk-tabs__panel')
        cy.contains('Preferential tariff quota')
        cy.get('.table-line')
        cy.contains('051618').click()
        cy.get('.tariff-info').focus()
            .contains('Order number 051618')
        cy.contains('Balance')
        cy.contains('6300.0')
        cy.contains('Initial amount')
        cy.contains('6300.0')
        cy.contains('Status')
        cy.contains('Open')
        cy.contains('Unit')
        cy.contains('Tonne (1000 kg)')
        cy.get('.close [href]').click()
    })
})
