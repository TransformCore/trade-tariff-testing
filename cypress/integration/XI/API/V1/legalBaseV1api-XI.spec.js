describe('version v1 api - legal base should be present in the backend API response  API',function() {

    Cypress.config('baseUrl', 'https://dev.trade-tariff.service.gov.uk/xi')

    it('v2 - 200, legal base is present', () => {
        cy.request('/api/v1/commodities/0101210000.json').then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body.included[285]).to.have.property('type', 'legal_act')
        })
    })
})