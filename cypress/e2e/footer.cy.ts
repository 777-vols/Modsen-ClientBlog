import { baseUrl } from '../support/baseUrl';

describe('Renders Footer', () => {
  it('Should test footer empty form submit', () => {
    cy.visit(`${baseUrl}/en/contact`);

    cy.get('h2')
      .contains('Subscribe to our news letter to get latest updates and news')
      .should('exist');
    cy.get('button').contains('Subscribe').click();
    cy.get('span').contains('Full Name is required!').should('exist');
    cy.get('span').contains('Email is required!').should('exist');
    cy.get('span').contains('Message is required!').should('exist');
  });

  it('Should test footer filled form submit', () => {
    cy.visit(`${baseUrl}/en/contact`);

    cy.get('[data-cy="footerFormFullName"]').type('TestUser');
    cy.get('[data-cy="footerFormEmail"]').type('user@google.com');
    cy.get('[data-cy="footerFormTextarea"]').type('Test message text');
    cy.get('button').contains('Subscribe').click();
    cy.wait(3000);
    cy.get('div').contains('Success').should('exist');
  });

  it('Should test privacyPolicy link', () => {
    cy.visit(`${baseUrl}/en/contact`);

    cy.get('a').contains('Privacy Policy').click();

    cy.wait(3000);
    cy.url().should('eq', `${baseUrl}/en/privacyPolicy`);
  });

  it('Should test socials', () => {
    cy.visit(`${baseUrl}/en/contact`);

    cy.get('[data-cy="social"]').should('have.length', 4);

    cy.get('a[href*="https://www.facebook.com"]').should('exist');
    cy.get('a[href*="https://twitter.com"]').should('exist');
    cy.get('a[href*="https://www.instagram.com"]').should('exist');
    cy.get('a[href*="https://www.linkedin.com"]').should('exist');
  });
});
