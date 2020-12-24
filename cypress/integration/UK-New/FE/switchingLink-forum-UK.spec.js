describe('🇬🇧 💡 Switching Link ,Forum removed  - (UK version)',function() {
    //--- HOTT-96 -------------
    Cypress.config('baseUrl')

    it('Sections Page - Forum section removed', function () {
        cy.visit('/sections')
        cy.contains('Forum').should('not.exist')
    })

    it('Sections Page - switching link available', function () {
        cy.visit('/sections')
        cy.get('.govuk-main-wrapper')
            .should('be.visible', 'Switch to the ')
            .should('be.visible', 'The Online Trade Tariff')
        cy.get('main#content  nav  a').click()
        cy.contains('The Northern Ireland (EU) Tariff')
        cy.get('main#content  nav  a').click()
        cy.contains('The Online Trade Tariff')
        cy.get('.govuk-template')
            .should('not.have.text', 'Get guidance on this product area:')
            .should('not.have.text', 'Classification of goods')
            .should('not.have.text', 'Discuss this chapter in the forums')

    })
    it('Chapters Page - switching link available', function () {
        cy.visit('/chapters/01')
        cy.get('.govuk-main-wrapper')
            .should('be.visible', 'Switch to the ')
            .should('be.visible', 'The Online Trade Tariff')
        cy.get('.clt.govuk-\\!-font-size-15.govuk-\\!-margin-bottom-7.js-tariff-breadcrumbs.tariff-breadcrumbs > nav  a').click()
        cy.contains('The Northern Ireland (EU) Tariff')
        cy.get('.clt.govuk-\\!-font-size-15.govuk-\\!-margin-bottom-7.js-tariff-breadcrumbs.tariff-breadcrumbs > nav  a').click()
        cy.contains('The Online Trade Tariff')
        cy.get('.govuk-template')
            .should('not.have.text', 'Get guidance on this product area:')
            .should('not.have.text', 'Classification of goods')
            .should('not.have.text', 'Discuss this chapter in the forums')
    })
    it('Headings Page - switching link available', function () {
        cy.visit('/headings/0101')
        cy.get('.govuk-main-wrapper')
            .should('be.visible', 'Switch to the ')
            .should('be.visible', 'The Online Trade Tariff')
        cy.get('.clt.govuk-\\!-font-size-15.govuk-\\!-margin-bottom-7.js-tariff-breadcrumbs.tariff-breadcrumbs > nav  a').click()
        cy.contains('The Northern Ireland (EU) Tariff')
        cy.get('.clt.govuk-\\!-font-size-15.govuk-\\!-margin-bottom-7.js-tariff-breadcrumbs.tariff-breadcrumbs > nav  a').click()
        cy.contains('The Online Trade Tariff')
        cy.get('.govuk-template')
            .should('not.have.text', 'Get guidance on this product area:')
            .should('not.have.text', 'Classification of goods')
            .should('not.have.text', 'Discuss this chapter in the forums')
    })
    it('Commodity Page',function(){
        cy.visit('/commodities/0406103010')
        cy.get('.govuk-main-wrapper')
            .should('be.visible', 'Switch to the ')
            .should('be.visible', 'The Northern Ireland (EU) Tariff')
        cy.get('.clt.govuk-\\!-font-size-15.govuk-\\!-margin-bottom-7.js-tariff-breadcrumbs.tariff-breadcrumbs > nav  a').click()
        cy.contains('he Northern Ireland (EU) Tariff')
        cy.get('.clt.govuk-\\!-font-size-15.govuk-\\!-margin-bottom-7.js-tariff-breadcrumbs.tariff-breadcrumbs > nav  a').click()
        cy.contains('The Online Trade Tariff')
    })
    it('Tools Page',function(){
        cy.visit('/tools')
        cy.get('.govuk-main-wrapper')
            .should('be.visible', 'Switch to the ')
            .should('be.visible', 'The Northern Ireland (EU) Tariff')
        cy.get('.clt.govuk-\\!-font-size-15.govuk-\\!-margin-bottom-7.js-tariff-breadcrumbs.tariff-breadcrumbs > nav  a').click()
        cy.contains('he Northern Ireland (EU) Tariff')
        cy.get('.clt.govuk-\\!-font-size-15.govuk-\\!-margin-bottom-7.js-tariff-breadcrumbs.tariff-breadcrumbs > nav  a').click()
        cy.contains('The Online Trade Tariff')
    })
    it('Quota Search Page',function(){
        cy.visit('/quota_search')
        cy.get('.govuk-main-wrapper')
            .should('be.visible', 'Switch to the ')
            .should('be.visible', 'The Northern Ireland (EU) Tariff')
        cy.get('.clt.govuk-\\!-font-size-15.govuk-\\!-margin-bottom-7.js-tariff-breadcrumbs.tariff-breadcrumbs > nav  a').click()
        cy.contains('he Northern Ireland (EU) Tariff')
        cy.get('.clt.govuk-\\!-font-size-15.govuk-\\!-margin-bottom-7.js-tariff-breadcrumbs.tariff-breadcrumbs > nav  a').click()
        cy.contains('The Online Trade Tariff')
    })
    it('Certificate Search Page',function(){
        cy.visit('/certificate_search')
        cy.get('.govuk-main-wrapper')
            .should('be.visible', 'Switch to the ')
            .should('be.visible', 'The Northern Ireland (EU) Tariff')
        cy.get('.clt.govuk-\\!-font-size-15.govuk-\\!-margin-bottom-7.js-tariff-breadcrumbs.tariff-breadcrumbs > nav  a').click()
        cy.contains('he Northern Ireland (EU) Tariff')
        cy.get('.clt.govuk-\\!-font-size-15.govuk-\\!-margin-bottom-7.js-tariff-breadcrumbs.tariff-breadcrumbs > nav  a').click()
        cy.contains('The Online Trade Tariff')
    })
    it('Additional Code Search Page',function(){
        cy.visit('/additional_code_search')
        cy.get('.govuk-main-wrapper')
            .should('be.visible', 'Switch to the ')
            .should('be.visible', 'The Northern Ireland (EU) Tariff')
        cy.get('.clt.govuk-\\!-font-size-15.govuk-\\!-margin-bottom-7.js-tariff-breadcrumbs.tariff-breadcrumbs > nav  a').click()
        cy.contains('he Northern Ireland (EU) Tariff')
        cy.get('.clt.govuk-\\!-font-size-15.govuk-\\!-margin-bottom-7.js-tariff-breadcrumbs.tariff-breadcrumbs > nav  a').click()
        cy.contains('The Online Trade Tariff')
    })
    it('Chemical Search Page',function(){
        cy.visit('/chemical_search')
        cy.get('.govuk-main-wrapper')
            .should('be.visible', 'Switch to the ')
            .should('be.visible', 'The Northern Ireland (EU) Tariff')
        cy.get('.clt.govuk-\\!-font-size-15.govuk-\\!-margin-bottom-7.js-tariff-breadcrumbs.tariff-breadcrumbs > nav  a').click()
        cy.contains('he Northern Ireland (EU) Tariff')
        cy.get('.clt.govuk-\\!-font-size-15.govuk-\\!-margin-bottom-7.js-tariff-breadcrumbs.tariff-breadcrumbs > nav  a').click()
        cy.contains('The Online Trade Tariff')
    })
    it('A-Z Page',function(){
        cy.visit('/a-z-index/a')
        cy.get('.govuk-main-wrapper')
            .should('be.visible', 'Switch to the ')
            .should('be.visible', 'The Northern Ireland (EU) Tariff')
        cy.get('.clt.govuk-\\!-font-size-15.govuk-\\!-margin-bottom-7.js-tariff-breadcrumbs.tariff-breadcrumbs > nav  a').click()
        cy.contains('he Northern Ireland (EU) Tariff')
        cy.get('.clt.govuk-\\!-font-size-15.govuk-\\!-margin-bottom-7.js-tariff-breadcrumbs.tariff-breadcrumbs > nav  a').click()
        cy.contains('The Online Trade Tariff')
    })

})
