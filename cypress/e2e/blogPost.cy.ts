import { baseUrl } from '../support/baseUrl';

describe('Renders Blog post page ', () => {
  it('Should test navigation to Author page from Current post block', () => {
    cy.visit(`${baseUrl}/en`);
    cy.get('[data-cy="readLinkHomeHero"]').contains('Read More >').click();
    cy.url().should('eq', `${baseUrl}/en/blogPost/0`);

    cy.get('[data-cy="authorPageLink"]').contains('James West').click();
    cy.url().should('eq', `${baseUrl}/en/author/4`);
  });

  it('Should test WhatReadNext block', () => {
    cy.visit(`${baseUrl}/en`);
    cy.get('[data-cy="readLinkHomeHero"]').contains('Read More >').click();
    cy.url().should('eq', `${baseUrl}/en/blogPost/0`);

    cy.get('[data-cy="recommendedPost"]').should('have.length', 3);
    cy.get('[data-cy="recommendedPostAuthorLink"]').first().click();
    cy.url().should('eq', `${baseUrl}/en/author/5`);
  });
});
