App.Message.Controller = function(views){
  this.views = views

  this.initialize = function(){
    console.log('Message Controller Initialized')
    this.bindTextButton()
    this.bindClearButton()
    this.bindSendButton()
  }

  this.bindTextButton = function(){
    $('.textButton').click(function(e){
      this.views.autoFillCellphone(e)
    }.bind(this))
  }

  this.bindClearButton = function(){
    $('#clearButton').click(function(e){
      e.preventDefault()
      this.views.clearInputFields()
    }.bind(this))
  }

  this.bindSendButton = function(){
    $('#sendButton').click(function(e){
      e.preventDefault()
      this.checkIfBlank()
    }.bind(this))
  }

  this.checkIfBlank = function(){
    // debugger
    if(this.views.getPhone() === "" || this.views.getMessage === ""){
      this.views.renderErrorMessage()
    } else {
      this.sendAjaxCall()
    }
  }

  this.sendAjaxCall = function(){
    console.log('Making send text api call.')
    $.ajax({
      url: '/sendhub/message',
      type: 'POST',
      data: {contacts: [this.views.getPhone()], text: this.views.getMessage()}
    }).done(function(response){
      this.views.renderResponse(response)
    }.bind(this))
  }
}