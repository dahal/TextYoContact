var App = {
  Contact:  {},
  Message:  {} 
}

$(document).ready(function(){
  var contactView                 = new App.Contact.Views()
  var contactController           = new App.Contact.Controller(contactView)
  contactController.initialize()

  var messageView                 = new App.Message.Views()
  var messageController           = new App.Message.Controller(messageView)
  messageController.initialize()
})