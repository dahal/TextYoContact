App.Contact.Controller = function(view){
  this.view = view;

  this.initialize = function(){
    console.log('Contact Controller Initialized')
    this.bindListener()
  }

  this.bindListener = function(){
    $('#addNewContact').on('submit', function(e){
      e.preventDefault()
      this.contactValidation()
    }.bind(this))
  }

  this.contactValidation = function(){
    console.log('Validating Contact')
    var name        = this.view.getName()
    var phone       = this.view.getCellPhone()
    console.log(name, phone)
    var nameRegex   = /^[a-z ,.'-]+$/i
    var phoneRegex  = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/
    if (nameRegex.test(name) && phoneRegex.test(phone)){
      this.createNewContact()
    } else {
      this.view.throwError()
    }
  }

  this.createNewContact = function(){
    $.ajax({
      url: '/contacts/create',
      type: 'POST',
      data: {name: this.view.getName(), cellphone: this.view.getCellPhone()}
    }).done(function(contact){
      this.view.newContactTemplate(contact)
    }.bind(this))
  }
}