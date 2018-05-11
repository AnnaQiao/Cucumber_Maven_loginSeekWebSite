$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/gitHub/Cucumber_SeekAutomation/src/test/java/Features/dataTable.feature");
formatter.feature({
  "line": 1,
  "name": "data table;",
  "description": "",
  "id": "data-table;",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8705255280,
  "status": "passed"
});
formatter.before({
  "duration": 28155781080,
  "status": "passed"
});
formatter.before({
  "duration": 1189001,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "registration by using dataTable",
  "description": "",
  "id": "data-table;;registration-by-using-datatable",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is on the new registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enter invalid data on the page",
  "rows": [
    {
      "cells": [
        "fields",
        "values"
      ],
      "line": 7
    },
    {
      "cells": [
        "Email address",
        "pzlvxq24@163.com"
      ],
      "line": 8
    },
    {
      "cells": [
        "First name",
        "dudu"
      ],
      "line": 9
    },
    {
      "cells": [
        "Last name",
        "gu"
      ],
      "line": 10
    },
    {
      "cells": [
        "Create password",
        "123456"
      ],
      "line": 11
    },
    {
      "cells": [
        "Confirm password",
        "123456"
      ],
      "line": 12
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user registration should be unsuccess",
  "keyword": "Then "
});
formatter.match({
  "location": "extractTextFromImageUsingSeleniumAndCucumber.user_is_on_the_new_registration_page()"
});
formatter.result({
  "duration": 13159465890,
  "status": "passed"
});
formatter.match({
  "location": "extractTextFromImageUsingSeleniumAndCucumber.user_enter_valid_data_on_the_page(DataTable)"
});
formatter.result({
  "duration": 9972266704,
  "status": "passed"
});
formatter.match({
  "location": "extractTextFromImageUsingSeleniumAndCucumber.user_registration_should_be_success()"
});
formatter.result({
  "duration": 4405873870,
  "status": "passed"
});
formatter.after({
  "duration": 17368331,
  "status": "passed"
});
formatter.after({
  "duration": 3623303672,
  "status": "passed"
});
formatter.after({
  "duration": 35492578,
  "status": "passed"
});
formatter.after({
  "duration": 100814,
  "status": "passed"
});
});