App.Contact.Views = function(){
  console.log('Contact View loaded.')

  this.getName = function(){
    return $('#name').val()
  }

  this.getCellPhone = function(){
    return $('#cellphone').val()
  }

  this.throwError = function(){
    var source    = $('#contact-error-template').html()
    var template  = Handlebars.compile(source)
    this.renderContactError(template)
  }

  this.renderContactError = function(template){
    $('#addNewContact').prepend(template)   
  }

  this.newContactTemplate = function(contact){
    var source            = $('#new-contact-template').html()
    var content           = { contactId: contact.id,
                              contactName: contact.name,
                              contactPhone: contact.cellphone
                            }
    var template          = Handlebars.compile(source)
    var contactDetails    = template(content)
    this.renderNewContact(contactDetails)
  }

  this.renderNewContact = function(contact){
    $('.contacts').prepend(contact)
  }
}
