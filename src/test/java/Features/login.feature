Feature:  login
Scenario: succesful login the seek
          Given user am on seek login page
          When user enter username as "18220174098"
          And  user enter password as "Qiao1234!"
          Then user clicks on login button.
          And  user  is on  home page.