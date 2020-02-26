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

const checkPopup = (headerText, firstLineBodyText, secondLineBodyText) => {
  cy.get(".modal-dialog").should("be.visible");
  if (headerText) {
    cy.get(".modal-dialog .modal-header").contains(headerText);
  }
  if (firstLineBodyText) {
    cy.get(".modal-dialog .modal-body").contains(firstLineBodyText);
  }
  if (secondLineBodyText) {
    cy.get(".modal-dialog .modal-body").contains(secondLineBodyText);
  }
};

const startNewGame = () => {
  cy.get('[data-test="btn-start"]').click();
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
    // look for error message
    cy.findByText("Error: please input three numbers within range [1-9]")
      .should("be.visible")
      .should("have.css", "color", "rgb(255, 0, 0)") // red color
      .should("have.css", "font-weight", "500"); // bold
  });

  it("Should insert an attempt whose numbers are in range [1-9]", () => {
    enter();
    startNewGame();
    insertAttempt("1", "2", "3");
    cy.get("table").should("be.visible");
    cy.get("table tbody tr td")
      .first()
      .should("have.text", "# 1"); // check "Attempt" column text - "# 1"
    cy.get("table tbody tr td")
      .eq(1)
      .should("have.text", "1"); // check "N.1" column text - "1"
    cy.get("table tbody tr td")
      .eq(2)
      .should("have.text", "2"); // check "N.2" column text - "2"
    cy.get("table tbody tr td")
      .eq(3)
      .should("have.text", "3"); // check "N.3" column text - "3"
  });

  it("Shouldn't insert number out of range as input", () => {
    enter();
    startNewGame();
    insertAttempt("11", "2", "3");
    // look for error message
    cy.findByText("Error: please input three numbers within range [1-9]")
      .should("be.visible")
      .should("have.css", "color", "rgb(255, 0, 0)") // red color
      .should("have.css", "font-weight", "500"); // bold
  });

  it("Shouldn't insert number out of range as input", () => {
    enter();
    startNewGame();
    insertAttempt("11", "2", "3");
    // look for error message
    cy.findByText("Error: please input three numbers within range [1-9]")
      .should("be.visible")
      .should("have.css", "color", "rgb(255, 0, 0)") // red color
      .should("have.css", "font-weight", "500"); // bold
  });

  it("Shouldn't insert repeated value as input", () => {
    enter();
    startNewGame();
    insertAttempt("1", "1", "3");
    // look for error message
    cy.contains("You have inserted a repeated value")
      .should("be.visible")
      .should("have.css", "color", "rgb(255, 0, 0)") // red color
      .should("have.css", "font-weight", "500"); // bold
  });

  it("Should abort and show a popup", () => {
    enter();
    startNewGame();
    insertAttempt("1", "1", "3");
    cy.get('[data-test="abort"]').click();
    checkPopup("Game aborted :(", "You chose to abort the session game", "You secret combination was");
  });
});
