Feature:  login

Scenario:  regist an account of seek
          Given user am on seek register page
          When user input First name and last name 
          And  user input Email address and password
          Then user click Register button
          
Scenario: log in seek success
          Given user am on seek login page
          When user enter vaild username 
          And  user enter vaild password 
          Then user clicks on login button
          And  user is on  home page
          

          
          
  