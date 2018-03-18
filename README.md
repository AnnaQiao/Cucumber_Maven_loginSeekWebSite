# Cucumber-Maven_SeekAutomation
 Seek Website Automation Test Demo
## Getting started
### Prerequisites
  - [Git](https://git-scm.com/) Source Code Management
- [JDK8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) JDK 1.8
- [Maven 3](https://maven.apache.org/download.cgi) Maven Build Tool
- [Junit 4](http://junit.org/junit4/) Unit Testing Tool
- [Seek login](https://www.seek.co.nz/sign-in?returnUrl=https%3A%2F%2Fwww.seek.co.nz%2F) - Website.
- [Cucumber](https://cucumber.io/) - Cucumber
### Cucumber Dependencies
  <dependencies> 
     <dependency>
         <groupId>org.seleniumhq.selenium</groupId>
         <artifactId>selenium-java</artifactId>
         <version>3.5.1</version>
     </dependency>

	<dependency>
	    <groupId>org.seleniumhq.selenium</groupId>
	    <artifactId>selenium-server</artifactId>
	    <version>3.5.1</version>
	</dependency>
	<dependency>
	    <groupId>org.seleniumhq.selenium</groupId>
	    <artifactId>selenium-support</artifactId>
	    <version>3.5.1</version>
	</dependency>
	
	<dependency>
	    <groupId>org.seleniumhq.selenium</groupId>
	    <artifactId>selenium-firefox-driver</artifactId>
	    <version>3.5.1</version>
	</dependency>
	
	<dependency>
	    <groupId>info.cukes</groupId>
	    <artifactId>cucumber-java</artifactId>
	    <version>1.2.3</version>
	</dependency>
		
	<dependency>
	    <groupId>info.cukes</groupId>
	    <artifactId>cucumber-junit</artifactId>
	    <version>1.2.3</version>
	</dependency>
	    <dependency>
	     <groupId>net.masterthought</groupId>
		 <artifactId>maven-cucumber-reporting</artifactId>
		 <version>2.8.0</version>
		  </dependency>
  </dependencies>
  ### TEST Cases
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
	    
### test script (stepdefinition)

public class loginStepDefinition {
	WebDriver driver;
	/**
	 * regist an account of seek
	 */
	@Given("^user am on seek register page$")
	public void user_am_on_seek_register_page()
	{
		System.setProperty("webdriver.firefox.marionette", "C:/geckodriver.exe");
		driver = new FirefoxDriver();
		driver.get("https://www.seek.co.nz/sign-up?returnUrl=https%3A%2F%2Fwww.seek.co.nz%2F");
		
	}
	@When("^user input First name and last name$")
	public void user_input_username()
	{
		driver.findElement(By.id("firstName")).sendKeys("qingxia");
		driver.findElement(By.id("lastName")).sendKeys("qiao");
		
	}
	@When("^user input Email address and password$")
	public void user_input_email_password()
	{
		driver.findElement(By.id("email")).sendKeys("pzlvxq24@163.com");
		driver.findElement(By.id("password")).sendKeys("peng1234");
	}
	@Then("^user click Register button$")
	public void user_click_register_button() throws InterruptedException
	{
		driver.findElement(By.xpath("//button[@data-automation='signup-submit']")).click();	
		Thread.sleep(10000);
		String acture = driver.getTitle();
		System.out.println(acture);
		assertEquals("Almost done - SEEK", acture);
		driver.quit();
	}
	
	/**
	 * log in seek success
	 */
	@Given("^user am on seek login page$")
	public void user_am_on_seek_login_page()  {
		System.setProperty("webdriver.firefox.marionette", "C:/geckodriver.exe");
		driver = new FirefoxDriver();
		driver.get("https://www.seek.co.nz/sign-in?returnUrl=https%3A%2F%2Fwww.seek.co.nz%2F");
	    
	}

	@When("^user enter vaild username$")
	public void user_enter_valid_username() {
	    driver.findElement(By.id("email")).sendKeys("annaqqx@gmail.com");
	}

	@When("^user enter vaild password$")
	public void user_enter_valid_password()  {
		driver.findElement(By.id("password")).sendKeys("Qiao1234!");
	}

	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button()  {
	   driver.findElement(By.xpath("//button[@type='submit']")).click();	
       
	 }

	@Then("^user is on  home page$")
	public void user_is_on_home_page() {
	
		try {
			Thread.sleep(10000);
			String actureRST = driver.getTitle();
			assertEquals("Jobs on SEEK - New Zealand's no. 1 Employment, Career and Recruitment site", actureRST);
			driver.quit();
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		};
		//Assert.assertEquals("Jobs on SEEK - New Zealand's no. 1 Employment, Career and Recruitment site", actureRST);
		driver.quit();
		
	}

	
}
### TestRunner
  package Runner;

  import org.junit.runner.RunWith;

   import cucumber.api.CucumberOptions;
   import cucumber.api.junit.Cucumber;
   @RunWith(Cucumber.class)
   @CucumberOptions(
		features="C:/gitHub/Cucumber_SeekAutomation/src/test/java/Features"
		,glue= {"stepDefinitions"},
		format = {"pretty","html:target","json:test-output/cucuberReport.json"}
		)

  public class TestRunner {

  }
### test report
     
 "line": 1,
    "elements": [
      {
        "line": 3,
        "name": "regist an account of seek",
        "description": "",
        "id": "login;regist-an-account-of-seek",
        "type": "scenario",
        "keyword": "Scenario",
        "steps": [
          {
            "result": {
              "duration": 16654251154,
              "status": "passed"
            },
            "line": 4,
            "name": "user am on seek register page",
            "match": {
              "location": "loginStepDefinition.user_am_on_seek_register_page()"
            },
            "keyword": "Given "
          },
          {
            "result": {
              "duration": 3217686376,
              "status": "passed"
            },
            "line": 5,
            "name": "user input First name and last name",
            "match": {
              "location": "loginStepDefinition.user_input_username()"
            },
            "keyword": "When "
          },
          {
            "result": {
              "duration": 872226380,
              "status": "passed"
            },
            "line": 6,
            "name": "user input Email address and password",
            "match": {
              "location": "loginStepDefinition.user_input_email_password()"
            },
            "keyword": "And "
          },
          {
            "result": {
              "duration": 12544176295,
              "status": "passed"
            },
            "line": 7,
            "name": "user click Register button",
            "match": {
              "location": "loginStepDefinition.user_click_register_button()"
            },
            "keyword": "Then "
          }
        ]
      },
