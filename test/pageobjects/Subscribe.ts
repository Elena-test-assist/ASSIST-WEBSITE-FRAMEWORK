import Base from "./Base.ts";
import Environment from "./Environment.ts";
import navigateDesktop from "./navigateDesktop.ts";

class Subscribe extends Base{
    public get emailInput(){
        return $('[type="email"]')
    }

    public get subscribeButton(){
        return $('button=Subscribe')
    }

    public get errorMessage(){
        return $('aria/The email address')

    }

  /*  public async enterEmail(email:string){
        await this.emailInput.setValue(email)

    }*/

    public async clickSubscribeButton(){
        await this.subscribeButton.waitForDisplayed()
        await this.subscribeButton.click()

    }

    public async subscribe(email:string){
        await Environment.loadHomePage()
        await Environment.setFullHDResolution()
        await navigateDesktop.goToBlogPage()
        await Environment.setTabletResolution()
        await this.emailInput.waitForDisplayed()
        await this.emailInput.setValue(email)
        await this.clickSubscribeButton()
    }

    public async subscribeWithInvalidEmail(){
        await this.subscribe('invalid-email')
        await expect(this.errorMessage).toHaveText('The email address invalid-email is not valid. Use the format user@example.com.')
    }

    

    }



    


export default new Subscribe()