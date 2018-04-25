$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 12484718552,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "regist an account of seek",
  "description": "",
  "id": "login;regist-an-account-of-seek",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user am on seek register page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user input First name and last name",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user input Email address and password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user click Register button",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinition.user_am_on_seek_register_page()"
});
formatter.result({
  "duration": 7766043784,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_input_username()"
});
formatter.result({
  "duration": 2011272296,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_input_email_password()"
});
formatter.result({
  "duration": 1015355077,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_click_register_button()"
});
formatter.result({
  "duration": 976247149,
  "status": "passed"
});
formatter.after({
  "duration": 1029706922,
  "status": "passed"
});
formatter.before({
  "duration": 10106906329,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "log in seek success",
  "description": "",
  "id": "login;log-in-seek-success",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "user am on seek login page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user enter vaild username",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user enter vaild password",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user is on  home page",
  "keyword": "And "
});
formatter.match({
  "location": "loginStepDefinition.user_am_on_seek_login_page()"
});
formatter.result({
  "duration": 7107152513,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_enter_valid_username()"
});
formatter.result({
  "duration": 1954105058,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_enter_valid_password()"
});
formatter.result({
  "duration": 453952138,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 452823549,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 11592646615,
  "status": "passed"
});
formatter.after({
  "duration": 1022856097,
  "status": "passed"
});
});