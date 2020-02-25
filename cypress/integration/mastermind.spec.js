/* eslint-disable no-undef */
/// <reference types="Cypress" />

const enter = () => {
  cy.server();
  cy.visit("/");
  cy.findByText("Mastermind game");
  cy.get('[data-test="btn-start"]').should("exist");
};

const insertAttempt = (n1, n2, n3) => {
  cy.get('input[name="n1"]').type(n1);
  cy.get('input[name="n2"]').type(n2);
  cy.get('input[name="n3"]').type(n3);
  cy.get('[data-test="insert"]').click();
};

const startNewGame = () => {
  cy.get("[data-test=btn-start]").click();
};

context("Mastermind game tests", () => {
  it("Should enter the app", () => {
    enter();
  });

  it("Should start a new game", () => {
    enter();
    startNewGame();
    cy.findByText("Next attempt:").should("be.visible");
  });

  it("Shouldn't insert chars as input", () => {
    enter();
    startNewGame();
    insertAttempt("a", "2", "3");
    // look for "You have inserted a repeated value (not allowed in this version)"
    // error message
    cy.findByText(
      "You have inserted a repeated value (not allowed in this version)"
    )
      .should("be.visible")
      .should("have.css", "color", "rgb(255, 0, 0)")    // red color
      .should("have.css", "font-weight", "500");        // bold
  });

  it.only("Shouldn't insert number out of range as input", () => {
    enter();
    startNewGame();
    insertAttempt("11", "2", "3");
    // look for "You have inserted a repeated value (not allowed in this version)"
    // error message
    cy.findByText(
      "You have inserted a repeated value (not allowed in this version)"
    )
      .should("be.visible")
      .should("have.css", "color", "rgb(255, 0, 0)")    // red color
      .should("have.css", "font-weight", "500");        // bold
  });
});
