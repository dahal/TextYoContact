6.times do
  name  = Faker::Name.name
  phone = Faker::PhoneNumber.cell_phone
  Contact.create(name: name, cellphone: phone)
end
