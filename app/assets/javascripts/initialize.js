var App = {
  Contact:  {}
}

$(document).ready(function(){
  var contactView                 = new App.Contact.Views()
  var contactController           = new App.Contact.Controller()
  contactController.initialize()
})