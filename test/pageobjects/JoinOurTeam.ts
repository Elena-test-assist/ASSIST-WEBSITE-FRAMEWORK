import Base from "./Base.ts"
import Environment from "./Environment.ts"
import navigateDesktop from "./navigateDesktop.ts"
class joinOurTeam extends Base{

    public get joinOurTeamButton(){
        return $('button=Join our team')
    }

    public get careerTitle(){
        return $('p=Join us and work in a')
    }


    public async clickOnJoinOurTeamButton(){
        await Environment.loadHomePage()
        await Environment.setFullHDResolution()
        await navigateDesktop.goToCompanyPage()
        await this.joinOurTeamButton.waitForDisplayed()
        await this.joinOurTeamButton.click()
        await this.careerTitle.waitForDisplayed()
        await expect(this.careerTitle).toHaveText('Join us and work in a creative & innovative environment')
    }
}

export default new joinOurTeam()