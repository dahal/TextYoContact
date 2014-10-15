App.Message.Views = function(){
  console.log('Message View Loaded')

  this.autoFillCellphone = function(event){
    var cellPhone = event.target.parentElement.firstChild.textContent
    $('#inputPhone').val(cellPhone)
  }

  this.clearInputFields = function(){
    $('#inputPhone').val('')
    $('#inputMessage').val('')
  }

  this.getPhone = function(){
    return $('#inputPhone').val()
  }

  this.getMessage = function(){
    return $('#inputMessage').val()
  }

  this.renderErrorMessage = function(){
    var source    = $('#contact-error-template').html()
    var template  = Handlebars.compile(source)
    $('fieldset').append(template)
  }

  this.renderResponse = function(response){
    // Todo:- Check to see if the response is success or error, and render success / error accordingly
    var source    = $('#contact-success-template').html()
    var template  = Handlebars.compile(source)
    $('fieldset').append(template)  
  }

}