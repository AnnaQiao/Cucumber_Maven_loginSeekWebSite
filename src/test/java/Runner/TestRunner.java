package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)
@CucumberOptions(
		features="C:/gitHub/Cucumber_SeekAutomation/src/test/java/Features/Outline.feature"
		,glue= {"stepDefinitions"},
		format = {"pretty","html:target","json:test-output/cucuberReport.json"}
		)

public class TestRunner {

}
