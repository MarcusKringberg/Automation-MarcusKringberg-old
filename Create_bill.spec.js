///<reference types="cypress"/>

import { createfunction } from "./Createfunction.spec"
import { loginfunction } from "./login.spec"
import { logoutfunction } from "./logoutfunction.spec"

it ("Bill",function(){
loginfunction(cy)
cy.wait(5000)
const bill_button = ":nth-child(3)>.btn"
cy.get(bill_button).click()
const create_bill_button = "h2 >.btn" 
cy.get(create_bill_button).click()
const bill_price_field = "input"
const bill_price = "400"
cy.get(bill_price_field).type(bill_price)
const paid_checkbox = ".checkbox"
cy.get(paid_checkbox).click()
createfunction(cy)
logoutfunction(cy)
})
