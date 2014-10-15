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
}
