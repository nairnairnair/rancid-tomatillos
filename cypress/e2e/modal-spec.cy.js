beforeEach(() => {
  cy.visit('http://localhost:3000');
});

describe('Feedback Loop login flows', () => {
  it('Should confirm that true is equal to true', () => {
    expect(true).to.equal(true)
  });
});