import { baseUrl } from '../support/baseUrl';

describe('Renders Navbar', () => {
  it('Should test language switcher', () => {
    cy.visit(`${baseUrl}/en`);
    cy.get('[data-cy="navbarTitle"]').contains('Modsen Client Blog').should('exist');
    cy.get('[data-cy="languageSwitcher"]').click();
    cy.wait(2000);
    cy.get('[data-cy="navbarTitle"]').contains('Блог Клиента Модсен').should('exist');
    cy.get('[data-cy="languageSwitcher"]').click();
    cy.get('[data-cy="navbarTitle"]').contains('Modsen Client Blog').should('exist');
  });

  it('Should test modal button', () => {
    cy.visit(`${baseUrl}/en`);
    cy.get('[data-cy="modalVideoButton"]').should('exist');
    cy.get('[data-cy="modalVideoButton"]').click();
    cy.get('[data-cy="modalVideo"]').should('exist');
    cy.get('[data-cy="closeModalVideo"]').click();
  });

  it('Should test title link', () => {
    cy.visit(`${baseUrl}/en/contact`);
    cy.get('a').contains('Modsen Client Blog').click();

    cy.wait(2000);
    cy.url().should('eq', `${baseUrl}/en`);
  });

  it('Should test menu link Home', () => {
    cy.visit(`${baseUrl}/en/contact`);
    cy.get('a').contains('Home').click();

    cy.wait(2000);
    cy.url().should('eq', `${baseUrl}/en`);
  });

  it('Should test menu link Contact Us', () => {
    cy.visit(`${baseUrl}/en`);
    cy.get('a').contains('Contact Us').click();

    cy.wait(2000);
    cy.url().should('eq', `${baseUrl}/en/contact`);
  });

  it('Should test menu link About Us', () => {
    cy.visit(`${baseUrl}/en`);
    cy.get('a').contains('About Us').click();

    cy.wait(2000);
    cy.url().should('eq', `${baseUrl}/en/about`);
  });
});
