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
	    
### stepDefinition
    
![](https://github.com/AnnaQiao/Cucumber-Maven_SeekAutomation/blob/master/picture/stepDefiniation.png)

![](https://github.com/AnnaQiao/Cucumber-Maven_SeekAutomation/blob/master/picture/stepDefiniation2.png)
	
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
     
![](https://github.com/AnnaQiao/Cucumber-Maven_SeekAutomation/blob/master/picture/2018.3.15.png)
