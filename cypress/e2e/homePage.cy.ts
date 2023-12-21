import { baseUrl } from '../support/baseUrl';

describe('Renders Home page', () => {
  it(' Should renders home page and test navigation', () => {
    cy.visit(`${baseUrl}/ru`);
    cy.get('a').contains('Читать далее >').click();
    cy.url().should('eq', `${baseUrl}/ru/blogPost/0`);
  });
});
