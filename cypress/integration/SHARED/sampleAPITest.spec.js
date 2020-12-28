describe(' 🍻 ***Test file***',function() {
    Cypress.config('baseUrl', 'https://dev.trade-tariff.service.gov.uk/xi')

    it('🍻🍻', function () {
        cy.request('/api/v1/commodities/0101210000.json')
            .then((response) => {

          //      expect(response.status).to.eq(200)
           //     expect(response.body).not.to.be.null
            //    expect(response.body.import_measures[29]).to.have.property('legal_acts')

                let import_measures = response.body.import_measures
                let found = false
                for (let i = 0; i < import_measures.length; i++) {
                    console.log(import_measures[i]);
                    if (import_measures[i].hasOwnProperty('legal_acts')) {
                        found = true
                        break
                    }
                }
                expect(found).to.be.true

                })

            })

})