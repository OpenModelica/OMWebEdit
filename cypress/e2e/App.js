describe("load app and create simple model using components in library", () => {
  it("can load app homepage and place components from library onto canvas", () => {
    const dataTransfer = new DataTransfer();
    cy.visit("/")
      .get(
        ':nth-child(1) > [tabindex="-1"] > :nth-child(1) > .MuiTypography-root'
      )
      .click()
      .get(
        ":nth-child(1) > :nth-child(1) > .MuiTreeItem-root > .MuiTreeItem-content > .MuiTypography-root"
      )
      .click()
      .get(":nth-child(1) > .tray-item")
      .trigger("dragstart", { dataTransfer })
      .get(".canvas")
      .trigger("drop", { dataTransfer, clientX: 350, clientY: 200 })
      .get(":nth-child(2) > .tray-item")
      .trigger("dragstart", { dataTransfer })
      .get(".canvas")
      .trigger("drop", { dataTransfer, clientX: 650, clientY: 200 });
  });
});
