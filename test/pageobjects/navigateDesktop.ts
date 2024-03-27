//.import {browser, expect } from '@wdio/globals'
const pageURL = "https://site-dev.assist.ro"
class navigateDesktop{
    
   // define selectors using getter methods
    public get homepageSelector(){
    return $('.block=Your Technical')}

    public get companyButtonSelector(){
        return $('aria/Company')
    }

    public get companySelector(){
        return $('p')
    }

    public get careersButtonSelector(){
        return $('aria/Careers')
    }

    public get blogButtonSelector(){
        return $('aria/Blog')
    }

    public get blogSelector(){
        return $('p=News, insights and advices')
    }
  
    public async waiForSeconds(seconds: number){
        await browser.pause(seconds * 1000)
    }

    public async setFullHDResolution(){
        await browser.setWindowSize(1980, 1080)
    }

    public async visit(){
        await browser.url(pageURL)
    }

    public async assertPageIsVisible(){
        await this.homepageSelector.waitForDisplayed()
    }

    public async assertPageHasText(){
        await expect(this.homepageSelector).toHaveText('Your Technical')
    }

    public async clickOnCompanyButton(){
        (await this.companyButtonSelector).click()
    }

    public async checkCompanyUrl(){
        await browser.url(pageURL+'/company')
    }


    public async assertCompanyPageHasText(){
        await expect(this.companySelector).toHaveText('A solid track record'+ '\n' + 'of delivering high-quality services')
    }
    

    public async assertCompanyPageIsVisible(){
        await (await this.companySelector).waitForExist()
    }

    public async clickOnCareersButton(){
        (await this.careersButtonSelector).click()
    }

    public async checkCareersUrl(){
        await browser.url(pageURL+'/career')
    }

    public async clickOnBlogButton(){
        (await this.blogButtonSelector).click()
    }

    public async checkBlogsUrl(){
        await browser.url(pageURL+'/blog')
    }

    public async assertBlogPageIsVisible(){
        await (await this.blogSelector).waitForExist()
    }

    public async assertBlogPageHasText(){
        await expect(this.companySelector).toHaveText('News, insights and advices from our team')
    }
}

export default new navigateDesktop();
