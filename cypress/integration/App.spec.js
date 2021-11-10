describe('Test App', () => {
  it('launches', () => {
    cy.visit('/');
  });

  it ('opens with NutriTracker title', () => {
    cy.visit ('/');
    cy.get('[data-cy=title]').should('contain', 'NutriTracker');
  });

  it('opens menu', () => {
    cy.visit ('/');
    cy.get('[data-cy=dropdown]').click();
    cy.get('[data-cy=menu]').should('contain' ,'Beef liver');
  });
});
