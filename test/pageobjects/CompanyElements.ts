import Base from "./Base.ts"
import navigateDesktop from "./navigateDesktop.ts"
import Environment from "./Environment.ts"

class Company extends Base{
    public get awardsAndRecognitionsButton(){
        return $('aria/Awards and recognitions')
    }

    public get awardsAndRecognitionsParagraph(){
        return $('p*=Our team')
    }

    public get companyCertificationButton(){
        return $('aria/Company certifications')
    }

    public get companyCertificationParagraph(){
        return $('p*=The company currently has over')
    }

    public get theWayWeWorkButton(){
        return $('p=The way we work')
    }

    public get theWayWeWorkParagraph(){
        return $('p*=Curiosity and innovation')
    }

    public get theWayWeActButton(){
        return $('p=The way we act')
    }

    public get theWayWeActParagraph(){
        return $('p*=Curiosity and innovation are pre-requisites')
    }

    public async clickOnAwardsandRecognitionsButton(){
        await this.awardsAndRecognitionsButton.waitForExist()
        await this.awardsAndRecognitionsButton.click()

}

    public async verifyAwardsandRecognitionsExpands(){
         await Environment.loadHomePage()
         await Environment.setFullHDResolution()
         await navigateDesktop.goToCompanyPage()
         await this.clickOnAwardsandRecognitionsButton()
         await this.awardsAndRecognitionsParagraph.waitForDisplayed()
         await expect(this.awardsAndRecognitionsParagraph).toHaveText(expect.stringContaining('Our team consistently meets and exceeds our clients’ expectations by')) 
    }

   public async clickOnCompanyCertificationsButton(){
        await this.companyCertificationButton.waitForExist()
        await this.companyCertificationButton.click()

}
public async verifyCompanyCertificationExpands(){
    await this.clickOnCompanyCertificationsButton()
    await this.companyCertificationParagraph.waitForDisplayed()
    await expect(this.companyCertificationParagraph).toHaveText(expect.stringContaining('The company currently has over 300 employees. ASSIST Software'))
}
public async clickOnTheWayWeWorkButton(){
    await this.theWayWeWorkButton.waitForDisplayed()
    await this.theWayWeWorkButton.click()
}

public async verifyTheWayWeWorkExpands(){
    await this.clickOnTheWayWeWorkButton()
    await this.theWayWeWorkParagraph.waitForDisplayed()
    await expect(this.theWayWeWorkParagraph).toHaveText(expect.stringContaining('Curiosity and innovation are pre-requisites. Listening is a'))

}

public async clickOntheWayWeActButton(){
    await this.theWayWeActButton.waitForExist()
    await this.theWayWeActButton.click()

}

public async verifyTheWayWeActExpands(){
    await this.clickOntheWayWeActButton()
    await this.theWayWeActParagraph.waitForDisplayed()
    await expect(this.theWayWeActParagraph).toHaveText(expect.stringContaining('Curiosity and innovation are pre-requisites. Listening is a'))
    await this.clickOntheWayWeActButton()
  

}
}

export default new Company()