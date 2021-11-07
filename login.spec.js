    function loginfunction(cy) {
      cy.visit("http://localhost:3000")
      const username_form = ":nth-child(1)> input"
      const password_form = ":nth-child(2)> input"
      const login_button =".btn"
      const username = "tester01"
      const password = "GteteqbQQgSr88SwNExUQv2ydb7xuf8c"
      cy.get(username_form).type(username)
      cy.get(password_form).type(password)
      cy.get(login_button).click()
    }
export {loginfunction}

