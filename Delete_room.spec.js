import { deletefunction } from "./deletefunction.spec"
import { loginfunction } from "./login.spec"
import { logoutfunction } from "./logoutfunction.spec"

///<reference types="cypress"/>
it("test",function(){
loginfunction(cy)
const room_button =":nth-child(1)>.btn"
cy.get(room_button).click()
const room_menu = ":nth-child(1) >.action > img"
      const posistion = "bottomRight" 
      cy.get(room_menu).click(posistion)
      deletefunction(cy)
      logoutfunction(cy)
})