import Base from "./Base.ts"

const baseurl='https://site-dev.assist.ro/'

class environment extends Base{
   
    public get homepageTitle(){
        return $('.block=Your Technical')
    }

    public get headerTitle(){
        return $('h1*=Discover')
    }

    
  
    public async loadHomePage(){
        await browser.url(baseurl)
        await this.homepageTitle.waitForDisplayed()
        await expect(this.homepageTitle).toHaveText('Your Technical')
        await this.waiForSeconds(2)
    }

    public async checkPageSuccessfullyLoaded(){
        await this.headerTitle.waitForDisplayed()
        await expect(this.headerTitle).toHaveText('Discover')
    }
}

export default new environment()