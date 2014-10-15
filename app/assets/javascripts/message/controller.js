App.Message.Controller = function(views){
  this.views = views

  this.initialize = function(){
    console.log('Message Controller Initialized')
    this.bindTextButton()
    this.bindClearButton()
  }

  this.bindTextButton = function(){
    $('.textButton').click(function(e){
      console.log('Text Button Clicked')
    })
  }

  this.bindClearButton = function(){
    $('#clearButton').click(function(e){
      e.preventDefault()
      console.log('Clear Button Clicked')
    })
  }
}