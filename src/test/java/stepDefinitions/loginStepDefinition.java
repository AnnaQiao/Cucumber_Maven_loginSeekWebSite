package stepDefinitions;

import static org.junit.Assert.assertEquals;

import org.openqa.selenium.By;
//import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.WebElement;
//import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class loginStepDefinition {
	WebDriver driver;
	@Given("^user am on seek login page$")
	public void user_am_on_CSDN_login_page()  {
		System.setProperty("webdriver.firefox.marionette", "C:/geckodriver.exe");
		driver = new FirefoxDriver();
		driver.get("https://www.seek.co.nz/sign-in?returnUrl=https%3A%2F%2Fwww.seek.co.nz%2F");
	    
	}

	@When("^user enter username as \"([^\"]*)\"$")
	public void user_enter_username_as(String arg1) {
	    driver.findElement(By.id("email")).sendKeys("annaqqx@gmail.com");
	}

	@When("^user enter password as \"([^\"]*)\"$")
	public void user_enter_password_as(String arg1)  {
		driver.findElement(By.id("password")).sendKeys("Qiao1234!");
	}

	@Then("^user clicks on login button\\.$")
	public void user_clicks_on_login_button()  {
	   driver.findElement(By.xpath("//button[@type='submit']")).click();	
       
	 }

	@Then("^user  is on  home page\\.$")
	public void user_is_on_home_page() {
	
		try {
			Thread.sleep(1000);
			String actureRST = driver.getTitle();
			Assert.assertEquals("Jobs on SEEK - New Zealand's no. 1 Employment, Career and Recruitment site", actureRST);
			
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		};
		//Assert.assertEquals("Jobs on SEEK - New Zealand's no. 1 Employment, Career and Recruitment site", actureRST);
		driver.quit();
	  
	}

}
