describe('Test App', () => {
  it('launches', () => {
    cy.visit('/');
  });

  it ('opens with NutriTracker title', () => {
    cy.visit ('/');
    cy.get('[data-cy=title]').should('contain', 'NutriTracker');
  });
});
