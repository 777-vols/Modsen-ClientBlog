import { baseUrl } from '../support/baseUrl';

describe('Renders Carousel', () => {
  it('Should test is Carousel elements exist', () => {
    cy.visit(`${baseUrl}/en`);

    cy.scrollTo(0, 1500, { duration: 1000 });
    cy.scrollTo(0, 3000, { duration: 1000 });
    cy.scrollTo(0, 7500, { duration: 1000 });
    cy.scrollTo(0, 9000, { duration: 1000 });
    cy.get('[data-cy="prevSlideButton"]').should('exist');
    cy.get('[data-cy="nextSlideButton"]').should('exist');
  });

  it('Should test Carousel prevSlide button inactive', () => {
    cy.visit(`${baseUrl}/en`);

    cy.scrollTo(0, 1500, { duration: 1000 });
    cy.scrollTo(0, 3000, { duration: 1000 });
    cy.scrollTo(0, 7500, { duration: 1000 });
    cy.scrollTo(0, 9000, { duration: 1000 });
    cy.get('[data-cy="slideText0"]').should('exist');
    cy.get('[data-cy="prevSlideButton"]').click();
    cy.get('[data-cy="slideText0"]').should('exist');
    cy.get('[data-cy="prevSlideButton"]').click();
  });

  it('Should test Carousel active buttons', () => {
    cy.visit(`${baseUrl}/en`);

    cy.scrollTo(0, 1500, { duration: 1000 });
    cy.scrollTo(0, 3000, { duration: 1000 });
    cy.scrollTo(0, 7500, { duration: 1000 });
    cy.scrollTo(0, 9000, { duration: 1000 });
    cy.get('[data-cy="slideText0"]').should('exist');
    cy.get('[data-cy="nextSlideButton"]').click();
    cy.get('[data-cy="nextSlideButton"]').click();
    cy.get('[data-cy="slideText2"]').should('exist');
    cy.get('[data-cy="prevSlideButton"]').click();
    cy.get('[data-cy="slideText1"]').should('exist');
  });

  it('Should test Carousel nextSlide button inactive', () => {
    cy.visit(`${baseUrl}/en`);

    cy.scrollTo(0, 1500, { duration: 1000 });
    cy.scrollTo(0, 3000, { duration: 1000 });
    cy.scrollTo(0, 7500, { duration: 1000 });
    cy.scrollTo(0, 9000, { duration: 1000 });
    cy.get('[data-cy="slideText0"]').should('exist');
    cy.get('[data-cy="nextSlideButton"]').click();
    cy.get('[data-cy="nextSlideButton"]').click();
    cy.get('[data-cy="nextSlideButton"]').click();
    cy.get('[data-cy="nextSlideButton"]').click();
    cy.get('[data-cy="nextSlideButton"]').click();
    cy.get('[data-cy="slideText5"]').should('exist');
    cy.get('[data-cy="nextSlideButton"]').click();
    cy.get('[data-cy="slideText5"]').should('exist');
  });
});
