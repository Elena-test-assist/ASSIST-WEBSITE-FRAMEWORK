import Base from "./Base.ts"
import Environment from "./Environment.ts"
class navigateDesktop extends Base {
    
   // define selectors using getter methods
   /* public get homepageTitle(){
        return $('.block=Your Technical')
    }
    */
    public get companyButton(){
        return $('aria/Company')
    }
 
    public get companyTitle(){
        return $('p=A solid')
    }
 
    public get careersButton(){
        return $('aria/Careers')
    }
 
    public get careerTitle(){
        return $('p=Join us and work in a')
    }
 
    public get blogButton(){
        return $('aria/Blog')
    }
 //title s
    public get blogTitle(){
        return $('p=News, insights and advices from our team')
    }
 
    public get servicesButton(){
        return $('a[data-nav-id="Services"]')
    }
 
    public get industriesButton(){
        return $('a[data-nav-id="Industries"]')
    }
 
    public get servicesDropdown(){
        return $('aria/Services')
    }
 
    public get industriesDropdown(){
        return $('aria/Industries')
    }

   /*public async loadHomePage(){
        await browser.url('')
        await this.homepageTitle.waitForDisplayed()
        await expect(this.homepageTitle).toHaveText('Your Technical')
   }*/


 
 
    public async clickOnCompanyButton(){
        await this.companyButton.waitForDisplayed()
        await this.companyButton.click()
 
    }
 
    public async goToCompanyPage(){
        await this.clickOnCompanyButton()
        await this.waiForSeconds(1)
        await Environment.checkPageSuccessfullyLoaded()
        await (this.companyTitle).waitForExist()
        await expect(this.companyTitle).toHaveText('A solid track record'+ '\n' + 'of delivering high-quality services')
    }
    
 
    public async clickOnCareersButton(){
        await this.careersButton.waitForDisplayed
        await this.careersButton.click()
    }
 
    public async goToCareersPage(){
        await this.clickOnCareersButton()
        await this.waiForSeconds(1)
        await Environment.checkPageSuccessfullyLoaded()
        await this.careerTitle.waitForExist()
        await expect(this.careerTitle).toHaveText('Join us and work in a creative & innovative environment')
        
    }
 
    public async clickOnBlogButton(){
        await (await this.blogButton).waitForDisplayed
        await this.blogButton.click()
    }
 
 
    public async goToBlogPage(){
        await this.clickOnBlogButton()
        await this.waiForSeconds(1)
        await Environment.checkPageSuccessfullyLoaded()
        await (await this.blogTitle).waitForExist()
        await expect(this.blogTitle).toHaveText('News, insights and advices from our team')
 
    }
 
    public async clickOnServicesButton(){
        await (await this.servicesButton).waitForExist
        await (await this.servicesButton).waitForDisplayed
        await this.servicesButton.click()
    }
 
    public async goToServicesMenu(){
        await this.clickOnServicesButton()
        await this.waiForSeconds(1)
        await Environment.checkPageSuccessfullyLoaded()
        await this.servicesDropdown.waitForExist()
        await expect(this.servicesDropdown).toHaveText('Services')
    }
 
 
    public async clickOnIndustriesButton(){
        await this.industriesButton.waitForDisplayed
        await this.industriesButton.click()
    }
 
    public async goToIndustriesMenu(){
        await this.clickOnIndustriesButton()
        await this.waiForSeconds(1)
        await Environment.checkPageSuccessfullyLoaded()
        await this.industriesDropdown.waitForExist()
        await expect(this.industriesDropdown).toHaveText('Industries')
    }    
}
export default new navigateDesktop()
 
 
 