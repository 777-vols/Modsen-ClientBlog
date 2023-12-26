import { baseUrl } from '../support/baseUrl';

describe('Renders contactusForm', () => {
  it('Should test empty contactusForm submit', () => {
    cy.visit(`${baseUrl}/en/contact`);

    cy.get('h1').contains('Let’s Start a Conversation').should('exist');
    cy.get('button').contains('Send Message').click();
    cy.get('span').contains('Full Name is required!').should('exist');
    cy.get('span').contains('Email is required!').should('exist');
    cy.get('span').contains('Message is required!').should('exist');
  });

  it('Should test footer filled form submit', () => {
    cy.visit(`${baseUrl}/en/contact`);

    cy.get('[data-cy="contactFormFullName"]').type('TestUser');
    cy.get('[data-cy="contactFormEmail"]').type('user@google.com');
    cy.get('[data-cy="contactFormSelect"]').select('Query 1');
    cy.get('[data-cy="contactFormTextarea"]').type('Test message text');
    cy.get('button').contains('Send Message').click();
    cy.wait(3000);
    cy.get('div').contains('Success').should('exist');
  });
});
