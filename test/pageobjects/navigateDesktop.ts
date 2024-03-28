import Base from "./Base.ts"

class navigateDesktop extends Base {
    
   // define selectors using getter methods
    public get homepageSelector(){
        return $('.block=Your Technical')
    }
    
    public get companyButtonSelector(){
        return $('aria/Company')
    }
 
    public get companySelector(){
        return $('p=A solid')
    }
 
    public get careersButtonSelector(){
        return $('aria/Careers')
    }
 
    public get careersSelector(){
        return $('p=Join us and work in a')
    }
 
    public get blogButtonSelector(){
        return $('aria/Blog')
    }
 
    public get blogSelector(){
        return $('p=News, insights and advices from our team')
    }
 
    public get servicesButtonSelector(){
        return $('a[data-nav-id="Services"]')
    }
 
    public get industriesButtonSelector(){
        return $('a[data-nav-id="Industries"]')
    }
 
    public get servicesSelector(){
        return $('aria/Services')
    }
 
    public get industriesSelector(){
        return $('aria/Industries')
    }

    public async loadHomePage(){
        await browser.url('https://site-dev.assist.ro/')
        await this.homepageSelector.waitForDisplayed()
        await expect(this.homepageSelector).toHaveText('Your Technical')
        await this.waiForSeconds(2)
    }
 
   /* public async loadHomePage(){
        await browser.url('https://site-dev.assist.ro/')
        await this.homepageSelector.waitForDisplayed()
        await expect(this.homepageSelector).toHaveText('Your Technical')
        await this.waiForSeconds(2)
    }*/
 
 
    public async clickOnCompanyButton(){
        await this.companyButtonSelector.waitForExist()
        await this.companyButtonSelector.waitForDisplayed()
        await this.companyButtonSelector.click()
 
    }
 
    public async goToCompanyPage(){
        await this.clickOnCompanyButton()
        await this.waiForSeconds(1)
        await (this.companySelector).waitForExist()
        await expect(this.companySelector).toHaveText('A solid track record'+ '\n' + 'of delivering high-quality services')
    }
    
 
    public async clickOnCareersButton(){
        await this.careersButtonSelector.waitForExist
        await this.careersButtonSelector.waitForDisplayed
        await this.careersButtonSelector.click()
    }
 
    public async goToCareersPage(){
        await this.clickOnCareersButton()
        await this.waiForSeconds(1)
        await this.careersSelector.waitForExist()
        await expect(this.careersSelector).toHaveText('Join us and work in a creative & innovative environment')
        
    }
 
    public async clickOnBlogButton(){
        await (await this.blogButtonSelector).waitForExist
        await (await this.blogButtonSelector).waitForDisplayed
        await this.blogButtonSelector.click()
    }
 
 
    public async goToBlogPage(){
        await this.clickOnBlogButton()
        await this.waiForSeconds(1)
        await (await this.blogSelector).waitForExist()
        await expect(this.blogSelector).toHaveText('News, insights and advices from our team')
 
    }
 
    public async clickOnServicesButton(){
        await (await this.servicesButtonSelector).waitForExist
        await (await this.servicesButtonSelector).waitForDisplayed
        await this.servicesButtonSelector.click()
    }
 
    public async goToServicesMenu(){
        await this.clickOnServicesButton()
        await this.waiForSeconds(1)
        await this.servicesSelector.waitForExist()
        await expect(this.servicesSelector).toHaveText('Services')
    }
 
 
    public async clickOnIndustriesButton(){
        await (await this.industriesButtonSelector).waitForExist
        await (await this.industriesButtonSelector).waitForDisplayed
        await this.industriesButtonSelector.click()
    }
 
    public async goToIndustriesMenu(){
        await this.clickOnIndustriesButton()
        await this.waiForSeconds(1)
        await this.industriesSelector.waitForExist()
        await expect(this.industriesSelector).toHaveText('Industries')
    }    
}
export default new navigateDesktop()
 
 
 