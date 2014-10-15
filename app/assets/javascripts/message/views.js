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
}