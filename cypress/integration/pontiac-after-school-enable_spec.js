// disable setting that causes error on squarespace site to fail the test.
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});

it("enables pontiac after-school product", () => {
    cy.visit("https://drew-robert-ekn6.squarespace.com/config/commerce/inventory");
    cy.get(".username").type(Cypress.env("SQUARESPACE_USERNAME"));
    cy.get(".password").type(Cypress.env("SQUARESPACE_PASSWORD"));
    cy.get("[data-test=login-button] > span").click({force: true});
    cy.get(".sqs-damask-panel-content").contains("Pontiac Weekly Fee");
    cy.get("body").type("{esc}");
    cy.wait(1000);
    cy.get(".sqs-damask-panel-content").contains("Pontiac Weekly Fee").parents("[data-test=inventory-panel-row]").click({force: true});
    cy.get(".standard-dialog-wrapper").contains("Hidden").click({force: true});
    cy.get(":nth-child(1) > .field-workflow-flyout-option > .field-workflow-title").click({force: true});
    cy.get("[data-test=dialog-saveAndClose]").click({force: true});
});