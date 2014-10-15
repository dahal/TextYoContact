App.Contact.Views = function(){
  console.log('Contact View loaded.')

  this.getName = function(){
    return $('#name').val()
  }

  this.getCellPhone = function(){
    return $('#cellphone').val()
  }

  this.throwError = function(){
    console.log('Houston We have a problem')
  }
}
