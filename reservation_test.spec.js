///<reference types="cypress"/>

import { createfunction } from "./Createfunction.spec"
import { loginfunction } from "./login.spec"
import { logoutfunction } from "./logoutfunction.spec"

describe("Login",function() {
    it("Login", function() { 
      loginfunction(cy)
      const create_button = ".blue"
      const reservations_button = ":nth-child(4)>.btn"
      cy.get(reservations_button).click()
      const create_reservation = "h2>.btn"
      cy.get(create_reservation).click()
      const start_date_field =":nth-child(1)> input"
      const start_date = "2021-12-12"
      cy.get(start_date_field).type(start_date)
      const end_date_field = ":nth-child(2)>input"
      const end_date = "2021-12-27" 
      cy.get(end_date_field).type(end_date)
      const costumer_selector = ":nth-child(3)>select"
      const costumer_name = "Jonas Hagblom (#3)"  
      cy.get(costumer_selector).select(costumer_name)
      const selector_for_rooms = ":nth-child(4)>select"
      const topically_selected_room = "Floor 5, Room 4"
      const selector_for_bills = ":nth-child(5)>select"
      const current_bill = "ID: 1" 
      cy.get(selector_for_rooms).select(topically_selected_room)
      cy.get(selector_for_bills).select(current_bill)
      createfunction(cy)
      logoutfunction(cy)
    })
})

