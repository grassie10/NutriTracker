describe('Test input details', () => {
  it('Changes average calorie count based on input details', () => {
    cy.visit('/');
    cy.get('[data-cy=height-input]').type('68');
    cy.get('[data-cy=weight-input]').type('155');
    cy.get('[data-cy=age-input]').type('22');
    cy.get('[data-cy=sex-select]').select('0');
    cy.get('[data-cy=activity-select]').select('2');
    cy.get('[data-cy=input-submit]').click();

    cy.get('[data-cy=average-calories]').should('contain', '2744 cal');
  });
});
