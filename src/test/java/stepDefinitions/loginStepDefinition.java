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
