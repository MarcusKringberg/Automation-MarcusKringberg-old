function logoutfunction(cy){
    const logout = ".user > .btn"
    cy.get(logout).click()

}
export {logoutfunction}
 