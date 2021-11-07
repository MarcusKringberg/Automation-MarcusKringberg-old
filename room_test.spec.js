///<reference types="cypress"/>

import { createfunction } from "./Createfunction.spec"
import { deletefunction } from "./deletefunction.spec"
import { loginfunction } from "./login.spec"
import { logoutfunction } from "./logoutfunction.spec"

describe("Login",function() {
    it("Login", function() { 
      loginfunction(cy)

      const room_button =":nth-child(1)>.btn"
      const create_room_button = "h2>.btn"
      const logout = ".user > .btn"
      cy.get(room_button).click()
      cy.get(create_room_button).click()
      const category_selector =":nth-child(1)> select"
      const category_type = "twin"  
      cy.get(category_selector).select(category_type)
      const number_selector = ":nth-child(2)> input"
      const room_number = "2"
      cy.get(number_selector).type(room_number)
      const floor_selector = ":nth-child(3)>input"
      const floor_number = "3"
      cy.get(floor_selector).type(floor_number)
      const available_checkbox = ".checkbox"
      cy.get(available_checkbox).click()
      const price_field = ":nth-child(5)>input"
      const price = "300"
      cy.get(price_field).type(price)
      const room_type_selector = ":nth-child(6)>select"
      const room_type = "penthouse"
      cy.get(room_type_selector).select(room_type)
      createfunction(cy)
      const room_menu = ":nth-child(1) >.action > img"
      const posistion = "bottomRight" 
      cy.get(room_menu).click(posistion)
      deletefunction(cy)
      logoutfunction(cy)

    })
    })
