import { baseUrl } from '../support/baseUrl';

describe('Renders Home page', () => {
  it('Should test navigation to BlogPost page from HomeHero block', () => {
    cy.visit(`${baseUrl}/en`);
    cy.get('[data-cy="readLinkHomeHero"]').contains('Read More >').click();
    cy.url().should('eq', `${baseUrl}/en/blogPost/0`);
  });

  it('Should test navigation to Author page from HomeHero block', () => {
    cy.visit(`${baseUrl}/en`);
    cy.get('[data-cy="authorLinkHomeHero"]').click();
    cy.url().should('eq', `${baseUrl}/en/author/4`);
  });

  it('Should test navigation to BlogPost page from AllPosts block ViewAll', () => {
    cy.visit(`${baseUrl}/en`);
    cy.scrollTo(0, 2000, { duration: 1000 });
    cy.get('a').contains('View All').click();
    cy.url().should('eq', `${baseUrl}/en/blog`);
  });

  it('Should test navigation to BlogPost page from FeaturePost block', () => {
    cy.visit(`${baseUrl}/en`);
    cy.scrollTo(0, 2000, { duration: 1000 });
    cy.get('[data-cy="readLinkFeaturedPost"]').contains('Read More >').click();
    cy.url().should('eq', `${baseUrl}/en/blogPost/1`);
  });

  it('Should test navigation to Author page from FeaturePost block', () => {
    cy.visit(`${baseUrl}/en`);
    cy.scrollTo(0, 2000, { duration: 1000 });
    cy.get('[data-cy="authorLinkFeaturedPost"]').click();
    cy.url().should('eq', `${baseUrl}/en/author/5`);
  });

  it('Should test navigation to BlogPost page from AllPosts block', () => {
    cy.visit(`${baseUrl}/en`);
    cy.scrollTo(0, 2000, { duration: 1000 });
    cy.get('a').contains('Design tips for designers that cover everything you need').click();
    cy.url().should('eq', `${baseUrl}/en/blogPost/3`);
  });

  it('Should test navigation to AboutUs page from AboutUs block', () => {
    cy.visit(`${baseUrl}/en`);
    cy.scrollTo(0, 1500, { duration: 1000 });
    cy.scrollTo(0, 2000, { duration: 1000 });
    cy.get('[data-cy="aboutUsLink"]').contains('Read More >').click();
    cy.url().should('eq', `${baseUrl}/en/about`);
  });

  it('Should test navigation to Category page from Category block', () => {
    cy.visit(`${baseUrl}/en`);
    cy.scrollTo(0, 1500, { duration: 1000 });
    cy.scrollTo(0, 3000, { duration: 1000 });
    cy.get('h3').contains('Technology').click();
    cy.url().should('eq', `${baseUrl}/en/category/technology`);
  });

  it('Should test navigation to AboutUs page from WhyWeStarted block', () => {
    cy.visit(`${baseUrl}/en`);
    cy.scrollTo(0, 1500, { duration: 1000 });
    cy.scrollTo(0, 3000, { duration: 2000 });
    cy.scrollTo(0, 4000, { duration: 2000 });
    cy.get('a').contains('Discover our story >').click();
    cy.url().should('eq', `${baseUrl}/en/about`);
  });

  it('Should test navigation to AboutUs page from WhyWeStarted block', () => {
    cy.visit(`${baseUrl}/en`);
    cy.scrollTo(0, 1500, { duration: 1000 });
    cy.scrollTo(0, 3000, { duration: 1000 });
    cy.scrollTo(0, 7500, { duration: 1000 });
    cy.get("[data-cy='authorLink']").should('have.length', 4);
    cy.get("[data-cy='authorLink']").first().click();
    cy.url().should('eq', `${baseUrl}/en/author/0`);
  });

  it('Should test navigation to AboutUs page from WhyWeStarted block', () => {
    cy.visit(`${baseUrl}/en`);
    cy.scrollTo(0, 1500, { duration: 1000 });
    cy.scrollTo(0, 3000, { duration: 1000 });
    cy.scrollTo(0, 7500, { duration: 1000 });
    cy.scrollTo(0, 13000, { duration: 1000 });
    cy.get('a').contains('Join Now').click();
    cy.url().should('eq', `${baseUrl}/en/contact`);
  });
});
