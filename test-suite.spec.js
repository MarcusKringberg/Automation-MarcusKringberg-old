///<reference types="cypress"/>
describe("Login",function() {
    it("Login", function() {
      cy.visit("http://localhost:3000")
      const username_form = ":nth-child(1)> input"
      const password_form = ":nth-child(2)> input"
      const login_button =".btn"
      const username = "tester01"
      const password = "GteteqbQQgSr88SwNExUQv2ydb7xuf8c"
      cy.get(username_form).type(username)
      cy.get(password_form).type(password)
      cy.get(login_button).click()
      const costumer_tab =".blocks>:nth-child(2)>.btn" 
      cy.get(costumer_tab).click()
      const create_costumer = "h2>.btn"
      cy.get(create_costumer).click()
      const field_for_costumer_name = ":nth-child(1)> input"
      const name_of_the_costumer = "Jonas Hagblom"
      const field_for_email =":nth-child(2)> input" 
      const Email_to_the_costumer = "jonas.hagblom@bredband.net"
      const Phone_number_to_the_costumer = "087468252"  
      cy.get(":nth-child(1)> input").type("Jonas Hagblom")
      cy.get(field_for_email).type(Email_to_the_costumer)
      cy.get(":nth-child(3)> input").type(Phone_number_to_the_costumer)
      const create_button = ".blue"
      cy.get(create_button).click()
      const logout = ".user > .btn"
      cy.get(logout).click()
      cy.get(username_form).type(username)
      cy.get(password_form).type(password)
      cy.get(login_button).click()
      const room_button =":nth-child(1)>.btn"
      const create_room_button = "h2>.btn" 
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
      cy.get(create_button).click()
      cy.wait(5000)
      const room_menu = ":nth-child(1) >.action > img"
      const posistion = "bottomRight" 
      cy.get(room_menu).click(posistion)
      const delete_button = ".menu :nth-child(2)" 
      cy.get(delete_button).click()
      cy.get(logout).click()
      cy.get(username_form).type(username)
      cy.get(password_form).type(password)
      cy.get(login_button).click()
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
      cy.get(create_button).click()
      const bill_menu = ":nth-child(1)>.action > img" 
      cy.get(bill_menu).click()
      cy.get(delete_button).click()
      cy.get(logout).click()
      cy.get(username_form).type(username)
      cy.get(password_form).type(password)
      cy.get(login_button).click()
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
      const selector_for_rooms = ":nth-child(4) > select"
      const topically_selected_room = "Floor 500,Room "
      const selector_for_bills = ":nth-child(5)>select"
      const current_bill = "ID: 2" 
      cy.get(selector_for_rooms).select(topically_selected_room)
      cy.get(selector_for_bills).select(current_bill)
      cy.get(create_button).click()
      cy.get(logout).click()




    })

   })
   