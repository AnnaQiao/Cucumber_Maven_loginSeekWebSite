package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)
@CucumberOptions(
		features="C:/automation test/CucumberTest/src/test/java/Features"
		,glue= {"stepDefinitions"},
		format = {"pretty","html:target"}
		)

public class TestRunner {

}
