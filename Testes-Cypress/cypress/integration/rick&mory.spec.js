/// <reference types="cypress" />

describe( 'interface' , () => {
    it('carregamento', () => {
        cy.visit('http://localhost:3000/');

        cy.get("[cy.get('.product-grid-item')]")
    });

    it('Realiza Filtro', () => {

    });

} );