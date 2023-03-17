const objectSchema = require('../fixtures/jsonSquema.json')
const baseUrl ='https://www.mercadolibre.com.ar/menu/departments'
describe('Consultar el endpoint de Mercado Libre', () => {

    it('Obtener departamentos', () => {
        cy.api('GET',baseUrl)
        .then((respose) => {
            expect(respose.status).to.equal(200);
            expect(respose.body).not.be.empty;
            expect(respose.body).to.be.jsonSchema(objectSchema);
        });       
    });

    it('FAILED - Obtener departamentos con status code 400', () => {
        cy.api('GET',baseUrl)
        .then((respose) => {
            expect(respose.status).to.equal(400);            
        });
    });
});