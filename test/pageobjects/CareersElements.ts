import Base from "./Base.ts"
import Environment from "./Environment.ts"

class Careers extends Base{

    public get careersButton(){
        return $('aria/Careers')
    }

    public get careerTitle(){
        return $('p=Join us and work in a')
    }

    public get exploreOpenPositionsButton(){
        return $('button=Explore open positions')
    }

    public get allJobsTitle(){
        return $('p=Navigate your')
    }

    public get firstJobButton(){
        return $('aria/UI/UX Designer')
    }

    public get firstJobTitle(){
        return $('aria/UI/UX Designer')
    }

    public get secondJobButton(){
        return $('aria/Clone of UI/UX Designer')
    }

    public get secondJobTitle(){
        return $('aria/Clone of UI/UX Designer')
    }

    public get thirdJobButton(){
        return $('aria/Senior React Native Developer')
    }

    public get thirdJobTitle(){
        return $('aria/Senior React Native Developer')
    }

    public get seeMoreOpenPositionsButton(){
        return $('button=See more open positions')
    }

    public get nameInput(){
        return $('input[name="name"]')
    }

    public get phoneInput(){
        return $('input[name="phone"]')
    }

    public get emailInput(){
        return $('input[name="email"]')
    }

    public get yourSpecializationInput(){
        return $('input[name="your_specialization"]')
    }

    public get additionalInformationInput(){
        return $('input[name="additional_information"]')
    }

    public get submitApplicationButton(){
        return $('button*=Submit')
    }

    public get errorMessage(){
        return $('aria/Required')
    }

    public async clickOnCareersButton(){
        await Environment.loadHomePage()
        await Environment.setFullHDResolution()
        await this.careersButton.waitForDisplayed()
        await this.careersButton.click()
        await expect(this.careerTitle).toHaveText(expect.stringContaining('Join us and work in a creative'))
        await Environment.checkPageSuccessfullyLoaded()
    }

    public async clickexploreOpenPositions(){
        await this.exploreOpenPositionsButton.waitForDisplayed()
        await this.exploreOpenPositionsButton.click()
        await expect(this.allJobsTitle).toHaveText(expect.stringContaining('Navigate your career towards success'))
        await Environment.checkPageSuccessfullyLoaded()
    }

    public async goToAllJobsPage(){
        await Environment.loadHomePage()
        await this.clickOnCareersButton()
        await this.clickexploreOpenPositions()
        await Environment.waiForSeconds(3)
        
    }

    public async clickonFirstJobButton(){
        await this.firstJobButton.waitForDisplayed()
        await this.firstJobButton.click()
        await Environment.waiForSeconds(3)
    }

    public async gotoFirstJobPage(){
        await browser.back()
        await this.careerTitle.scrollIntoView()
        await expect(this.careerTitle).toHaveText(expect.stringContaining('Join us and work in a creative'))
        await this.firstJobTitle.waitForDisplayed()
        await this.clickonFirstJobButton()
        await expect(this.firstJobTitle).toHaveText(expect.stringContaining('UI/UX Designer'))
    }


    public async clickonSecondJobButton(){
        await this.secondJobButton.waitForDisplayed()
        await this.secondJobButton.click()
        await Environment.waiForSeconds(3)
    }

    public async gotoSecondJobPage(){
        await browser.back()
        await this.careerTitle.scrollIntoView()
        await expect(this.careerTitle).toHaveText(expect.stringContaining('Join us and work in a creative'))
        await this.secondJobTitle.waitForDisplayed()
        await this.clickonSecondJobButton()
        await expect(this.secondJobTitle).toHaveText(expect.stringContaining('Clone of UI/UX Designer'))
    }

    public async clickonThirdJobButton(){
        await this.thirdJobButton.waitForDisplayed()
        await this.thirdJobButton.click()
        await Environment.waiForSeconds(3)
    }

    public async gotoThirdJobPage(){
        await browser.back()
        await this.careerTitle.scrollIntoView()
        await expect(this.careerTitle).toHaveText(expect.stringContaining('Join us and work in a creative'))
        await this.thirdJobTitle.waitForDisplayed()
        await this.clickonThirdJobButton()
        await expect(this.thirdJobTitle).toHaveText(expect.stringContaining('Senior React Native Developer'))
    }

    public async clickSeeMoreOpenPositionsButton(){
        await this.seeMoreOpenPositionsButton.waitForDisplayed()
        await this.seeMoreOpenPositionsButton.click()
    }

    public async verifySeeMoreOpenPositionsButton(){
        await browser.back()
        await this.careerTitle.scrollIntoView()
        await expect(this.careerTitle).toHaveText(expect.stringContaining('Join us and work in a creative'))
        await this.clickSeeMoreOpenPositionsButton()
        await expect(this.allJobsTitle).toHaveText(expect.stringContaining('Navigate your career towards success'))
        await browser.back()
        await this.careerTitle.scrollIntoView()
        await expect(this.careerTitle).toHaveText(expect.stringContaining('Join us and work in a creative'))
    }

    public async clickSubmitApplicationButton(){
        await this.submitApplicationButton.waitForDisplayed()
        await this.submitApplicationButton.click()
    }

    public async submitApplication(name:string, phone: string, email:string, specialization:any, additionalInformation:string){
        await this.nameInput.waitForDisplayed()
        await this.nameInput.setValue(name)
        await this.phoneInput.waitForDisplayed()
        await this.phoneInput.setValue(phone)
        await this.emailInput.waitForDisplayed()
        await this.emailInput.setValue(email)
        await this.yourSpecializationInput.waitForDisplayed()
        await this.yourSpecializationInput.setValue(specialization)
        await this.additionalInformationInput.waitForDisplayed()
        await this.additionalInformationInput.setValue(additionalInformation)
        await Environment.waiForSeconds(3)
        await this.clickSubmitApplicationButton()
       
    }

    public async submitWithInvalidName(){
        await this.submitApplication('1','0754952107','test@yahoo.com','qa','additional test information')
        await this.errorMessage.waitForDisplayed()
        await expect(this.errorMessage).toHaveText('Required')
    }

    public async clearApplicationForm(){
        await this.nameInput.waitForDisplayed()
        await this.nameInput.clearValue()
        await this.phoneInput.waitForDisplayed()
        await this.phoneInput.clearValue()
        await this.emailInput.waitForDisplayed()
        await this.emailInput.clearValue()
        await this.yourSpecializationInput.waitForDisplayed()
        await this.yourSpecializationInput.clearValue()
        await this.additionalInformationInput.waitForDisplayed()
        await this.additionalInformationInput.clearValue()

    }

    public async submitWithInvalidPhoneNumber(){
        await this.clearApplicationForm()
        await Environment.waiForSeconds(2)
        await this.submitApplication('username','1','test@yahoo.com','qa','additional test information')
        await this.errorMessage.waitForDisplayed()
        await expect(this.errorMessage).toHaveText('Required')
    }

    public async submitWithInvalidEmail(){
        await this.clearApplicationForm()
        await Environment.waiForSeconds(2)
        await this.submitApplication('username','0789907665','invalidemail','qa','additional test information')
        await this.errorMessage.waitForDisplayed()
        await expect(this.errorMessage).toHaveText('Required')
    }

    public async submitWithInvalidSpecialization(){
        await this.clearApplicationForm()
        await Environment.waiForSeconds(2)
        await this.submitApplication('username','0789907665','email@yahoo.com', ' ' ,'additional test information')
        await this.errorMessage.waitForDisplayed()
        await expect(this.errorMessage).toHaveText('Required')
    }

    public async submitWithInvalidAdditionalInformation(){
        await this.clearApplicationForm()
        await Environment.waiForSeconds(2)
        await this.submitApplication('username','0789907665','email@yahoo.com', 'test specialization' ,' ')
        await this.errorMessage.waitForDisplayed()
        await expect(this.errorMessage).toHaveText('Required')
    }

    

}

export default new Careers()