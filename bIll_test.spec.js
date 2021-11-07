///<reference types="cypress"/>

import { loginfunction } from "./login.spec"
import { logoutfunction } from "./logoutfunction.spec"

describe("Login",function() {
    it("Login", function() { 
      loginfunction(cy)
      cy.wait(5000)
      const create_button = ".blue"
      const delete_button = ".menu :nth-child(2)" 
      const logout = ".user > .btn"

      const bill_button = ":nth-child(3)>.btn"
      cy.get(bill_button).click()
      const create_bill_button = "h2 >.btn" 
      cy.get(create_bill_button).click()
      const bill_price_field = "input"
      const bill_price = "400"
      cy.get(bill_price_field).type(bill_price)
      const paid_checkbox = ".checkbox"
      cy.get(paid_checkbox).click()
      cy.get(create_button).click()
      const bill_menu = ":nth-child(1)>.action > img" 
      cy.get(bill_menu).click()
      cy.get(delete_button).click()
      logoutfunction(cy)
    })
})
