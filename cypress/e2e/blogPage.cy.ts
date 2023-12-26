import { baseUrl } from '../support/baseUrl';

describe('Renders Blog page', () => {
  it('Should test navigation to Blog post page from Featured post block', () => {
    cy.visit(`${baseUrl}/en/blog`);
    cy.get('[data-cy="readMoreLink"]').contains('Read More >').click();
    cy.url().should('eq', `${baseUrl}/en/blogPost/2`);
  });

  it('Should test navigation to Category page from Category block', () => {
    cy.visit(`${baseUrl}/en/blog`);
    cy.scrollTo(0, 3000);
    cy.get('[data-cy="categoryTechnology"]').contains('Technology');
    cy.get('[data-cy="categoryEconomy"]').contains('Economy');
    cy.get('[data-cy="categoryStartup"]').contains('Startup');
    cy.get('[data-cy="categoryBusiness"]').contains('Business').click();
    cy.url().should('eq', `${baseUrl}/en/category/business`);
  });

  it('Should test navigation to AboutUs page from JoinOurTeam block', () => {
    cy.visit(`${baseUrl}/en/blog`);
    cy.get('a').contains('Join Now').click();
    cy.url().should('eq', `${baseUrl}/en/contact`);
  });

  it('Should test active buttons in AllPosts block', () => {
    cy.visit(`${baseUrl}/en/blog`);
    cy.get('[data-cy="postItem"]').should('have.length', 5);

    cy.get('[data-cy="nextPageButton"]').should('exist');
    cy.get('[data-cy="prevPageButton"]').should('exist');

    cy.get('[data-cy="postItem3"]').should('exist');
    cy.get('[data-cy="nextPageButton"]').click();
    cy.get('[data-cy="postItem8"]').should('exist');
    cy.get('[data-cy="nextPageButton"]').click();
    cy.get('[data-cy="postItem13"]').should('exist');
    cy.get('[data-cy="nextPageButton"]').click();
    cy.get('[data-cy="postItem2"]').should('exist');

    cy.get('[data-cy="prevPageButton"]').click();
    cy.get('[data-cy="postItem13"]').should('exist');
  });

  it('Should test inactive prevButton in AllPosts block', () => {
    cy.visit(`${baseUrl}/en/blog`);

    cy.get('[data-cy="prevPageButton"]').click();
    cy.get('[data-cy="postItem3"]').should('exist');
    cy.get('[data-cy="prevPageButton"]').click();
    cy.get('[data-cy="postItem3"]').should('exist');
    cy.get('[data-cy="prevPageButton"]').click();
    cy.get('[data-cy="postItem3"]').should('exist');
  });

  it('Should test inactive nextButton in AllPosts block', () => {
    cy.visit(`${baseUrl}/en/blog`);

    cy.get('[data-cy="nextPageButton"]').click();
    cy.get('[data-cy="nextPageButton"]').click();
    cy.get('[data-cy="nextPageButton"]').click();
    cy.get('[data-cy="nextPageButton"]').click();
    cy.get('[data-cy="nextPageButton"]').click();

    cy.get('[data-cy="postItem2"]').should('exist');
    cy.get('[data-cy="nextPageButton"]').click();
    cy.get('[data-cy="postItem2"]').should('exist');
    cy.get('[data-cy="nextPageButton"]').click();
  });
});
