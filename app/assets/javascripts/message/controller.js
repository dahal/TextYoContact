App.Message.Controller = function(views){
  this.views = views

  this.initialize = function(){
    console.log('Message Controller Initialized')
    this.bindTextButton()
    this.bindClearButton()
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
}