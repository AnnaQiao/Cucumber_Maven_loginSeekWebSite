$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "annotation",
  "description": "",
  "id": "annotation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "succesful login the seek",
  "description": "",
  "id": "annotation;succesful-login-the-seek",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "user am on seek login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user enter username as \"18220174098\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enter password as \"Qiao1234!\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user clicks on login button.",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user  is on  home page.",
  "keyword": "And "
});
formatter.match({
  "location": "loginStepDefinition.user_am_on_CSDN_login_page()"
});
formatter.result({
  "duration": 30560627812,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "18220174098",
      "offset": 24
    }
  ],
  "location": "loginStepDefinition.user_enter_username_as(String)"
});
formatter.result({
  "duration": 2518971937,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Qiao1234!",
      "offset": 24
    }
  ],
  "location": "loginStepDefinition.user_enter_password_as(String)"
});
formatter.result({
  "duration": 682833806,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 844448313,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 14424591779,
  "status": "passed"
});
});