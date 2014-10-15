### Text Yo Contact
---
Simple SendHub App


##### Check it Out

```
~> git clone https://github.com/dahal/TextYoContact.git
~> cd TextYoContact
~> bundle install
~> rake db:create && rake db:migrate && rake db:seed
```

##### For Development Environment
*Please make sure to have .env file on root*

```
~> touch .env 
~> echo 'PHONE_NUMBER=sendhub_phone_number' > .env
~> echo 'API_KEY=sendhub_api_key' > .env
```
##### For Production Environment *(eg Heroku)*
```
~> heroku config:set PHONE_NUMBER=sendhub_phone_number
~> heroku config:set API_KEY=sendhub_api_key

```