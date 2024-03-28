import Base from "./Base.ts"
class navigateTablet extends Base {

    public get homepageSelector(){
        return $('.block=Your Technical')
    }

    public get menuButtonSelectorTablet(){
        return $('.transform.transition-transform')
    }

    public get companyButtonSelectorTablet(){
        return $('=Company')
    }

    public get companySelectorTablet(){
        return $('p=A solid')
    }
    
    public async clickOnMenuButtonTablet(){
        await this.menuButtonSelectorTablet.waitForExist()
        await this.menuButtonSelectorTablet.waitForDisplayed()
        await this.menuButtonSelectorTablet.click()
        await this.waiForSeconds(5)
    }

    public async clickOnCompanyButtonTablet(){
        await this.companyButtonSelectorTablet.waitForExist()
        await this.companyButtonSelectorTablet.waitForDisplayed()
        await this.companyButtonSelectorTablet.click()
 
    }

    public async goToCompanyPageTablet(){
        await this.clickOnMenuButtonTablet()
        await this.clickOnCompanyButtonTablet()
        await this.waiForSeconds(1)
        await (this.companySelectorTablet).waitForExist()
        await expect(this.companySelectorTablet).toHaveText('A solid track record'+ '\n' + 'of delivering high-quality services')
    }


     public async loadHomePageTablet(){
        await browser.url('https://site-dev.assist.ro/')
        await this.setTabletResolution()
        await this.homepageSelector.waitForDisplayed()
        await expect(this.homepageSelector).toHaveText('Your Technical')
        await this.waiForSeconds(2)

    }

}

export default new navigateTablet()
 