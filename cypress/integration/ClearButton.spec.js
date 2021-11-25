describe('clear button', () => {
  it('clear selected food item', () => {
    cy.visit('/');
    cy.get('[data-cy=dropdown]').click();
    cy.get('[data-cy=menu-Beef-liver]').click();
    cy.get("[data-cy=food-list]").should('exist');
    cy.get('[data-cy=food-list]').should('be.visible')
    cy.get('[data-cy=food-list]').should('contain','Beef liver')
    cy.get('[data-cy=clearButton]').click();
    cy.get("[data-cy=food-list]").should('not.exist');
  });
});