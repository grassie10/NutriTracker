describe('Selecting a food item', () => {
  it('displays selected food item', () => {
    cy.visit('/');
    cy.get('[data-cy=dropdown]').click();
    cy.get('[data-cy=menu-Beef-liver]').click();
    cy.get('[data-cy=food-list]').should('contain','Beef liver')
  });

  it('does not display unselected food item', () => {
    cy.visit('/');
    cy.get('[data-cy=dropdown]').click();
    cy.get('[data-cy=menu-Beef-liver]').click();
    cy.get('[data-cy=food-list]').should('not.contain','Salmon')
  });
});