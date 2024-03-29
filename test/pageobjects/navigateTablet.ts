import Base from "./Base.ts"
import Environment from "./Environment.ts"
class navigateTablet extends Base {

    /*public get homepageTitle(){
        return $('.block=Your Technical')
    }*/

    public get menuButtonTablet(){
        return $('.transform.transition-transform')
    }

    public get companyButtonTablet(){
        return $('=Company')
    }

    public get companyTitleTablet(){
        return $('p=A solid')
    }

    public get blogButtonTablet(){
        return $('=Blog')
    }

    public get blogTitleTablet(){
        return $('p=News, insights and advices')

    }

    public get servicesButtonTablet(){
        return $('span=Services')
    }

    public get servicesDropdownTablet(){
        return $('aria/Application Engineering')

    }

    public get industriesButtonTablet(){
        return $('.//span[normalize-space(text()) = "Industries"]')
    }

    public get industriesDropdownTablet(){
        return $('aria/Automotive')
    }
    
    public async clickOnMenuButtonTablet(){
        await this.menuButtonTablet.waitForDisplayed()
        await this.menuButtonTablet.click()
        await this.waiForSeconds(1)
    }

    public async clickOnCompanyButtonTablet(){
        await this.companyButtonTablet.waitForDisplayed()
        await this.companyButtonTablet.click()
 
    }

    public async goToCompanyPageTablet(){
        await this.clickOnMenuButtonTablet()
        await this.clickOnCompanyButtonTablet()
        await this.waiForSeconds(1)
        await Environment.checkPageSuccessfullyLoaded()
        await (this.companyTitleTablet).waitForExist()
        await expect(this.companyTitleTablet).toHaveText('A solid track record'+ '\n' + 'of delivering high-quality services')
    }

    public async clickOnBlogButtonTablet(){
        await this.blogButtonTablet.waitForDisplayed()
        await this.blogButtonTablet.click()
    }

    public async goToBlogPageTablet(){
        await this.clickOnMenuButtonTablet()
        await this.clickOnBlogButtonTablet()
        await this.waiForSeconds(1)
        await Environment.checkPageSuccessfullyLoaded()
        await this.blogTitleTablet.waitForExist()
        await expect(this.blogTitleTablet).toHaveText('News, insights and advices from our team')

    }

    public async clickOnServicesButtonTablet(){
        await this.servicesButtonTablet.waitForDisplayed()
        await this.servicesButtonTablet.click()

    }

    public async goToServicesTablet(){
        await this.clickOnMenuButtonTablet()
        await this.clickOnServicesButtonTablet()
        await Environment.checkPageSuccessfullyLoaded()
        await this.waiForSeconds(1)
        await expect(this.servicesDropdownTablet).toHaveText('Application Engineering')
    }

    public async clickOnIndustriesButtonTablet(){
        await this.industriesButtonTablet.waitForDisplayed()
        await this.industriesButtonTablet.click()
    }

    public async goToIndustriesTablet(){
        await this.clickOnIndustriesButtonTablet()
        await this.waiForSeconds(1)
        await Environment.checkPageSuccessfullyLoaded()
        await expect(this.industriesDropdownTablet).toHaveText('Automotive')
    }


    /* public async loadHomePageTablet(){
        await browser.url('https://site-dev.assist.ro/')
        await this.setTabletResolution()
        await this.homepageTitle.waitForDisplayed()
        await expect(this.homepageTitle).toHaveText('Your Technical')
        await this.waiForSeconds(2)

    }*/
   

}

export default new navigateTablet()
 