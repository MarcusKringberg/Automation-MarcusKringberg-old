function deletefunction(cy) {
    const delete_button = ".menu :nth-child(2)"
    cy.get(delete_button).click()


}
export{deletefunction}