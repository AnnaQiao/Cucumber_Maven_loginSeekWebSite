$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/gitHub/Cucumber_SeekAutomation/src/test/java/Features/Outline.feature");
formatter.feature({
  "line": 1,
  "name": "outline",
  "description": "",
  "id": "outline",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "login functionality for social networking site",
  "description": "",
  "id": "outline;login-functionality-for-social-networking-site",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user navigates to QQ",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter Username as \"\u003cusername\u003e\" and Password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "login should be unsuccessful",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "outline;login-functionality-for-social-networking-site;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 9,
      "id": "outline;login-functionality-for-social-networking-site;;1"
    },
    {
      "cells": [
        "username1",
        "password1"
      ],
      "line": 10,
      "id": "outline;login-functionality-for-social-networking-site;;2"
    },
    {
      "cells": [
        "username2",
        "password2"
      ],
      "line": 11,
      "id": "outline;login-functionality-for-social-networking-site;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 40004671809,
  "status": "passed"
});
formatter.before({
  "duration": 567882,
  "status": "passed"
});
formatter.before({
  "duration": 9690562630,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "login functionality for social networking site",
  "description": "",
  "id": "outline;login-functionality-for-social-networking-site;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user navigates to QQ",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter Username as \"username1\" and Password as \"password1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "login should be unsuccessful",
  "keyword": "Then "
});
formatter.match({
  "location": "outlineStepDefinition.goTologin()"
});
formatter.result({
  "duration": 9089589755,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username1",
      "offset": 21
    },
    {
      "val": "password1",
      "offset": 49
    }
  ],
  "location": "outlineStepDefinition.I_enter_Username_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 1531358284,
  "status": "passed"
});
formatter.match({
  "location": "outlineStepDefinition.validateRelogin()"
});
formatter.result({
  "duration": 24240178460,
  "status": "passed"
});
formatter.after({
  "duration": 46824564,
  "status": "passed"
});
formatter.after({
  "duration": 142348,
  "status": "passed"
});
formatter.after({
  "duration": 1632538639,
  "status": "passed"
});
formatter.before({
  "duration": 34537102799,
  "status": "passed"
});
formatter.before({
  "duration": 240519,
  "status": "passed"
});
formatter.before({
  "duration": 9999942985,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "login functionality for social networking site",
  "description": "",
  "id": "outline;login-functionality-for-social-networking-site;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user navigates to QQ",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter Username as \"username2\" and Password as \"password2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "login should be unsuccessful",
  "keyword": "Then "
});
formatter.match({
  "location": "outlineStepDefinition.goTologin()"
});
formatter.result({
  "duration": 7456821169,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username2",
      "offset": 21
    },
    {
      "val": "password2",
      "offset": 49
    }
  ],
  "location": "outlineStepDefinition.I_enter_Username_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 1389053703,
  "status": "passed"
});
formatter.match({
  "location": "outlineStepDefinition.validateRelogin()"
});
formatter.result({
  "duration": 24390666351,
  "status": "passed"
});
formatter.after({
  "duration": 65407208,
  "status": "passed"
});
formatter.after({
  "duration": 68342,
  "status": "passed"
});
formatter.after({
  "duration": 1144545145,
  "status": "passed"
});
});