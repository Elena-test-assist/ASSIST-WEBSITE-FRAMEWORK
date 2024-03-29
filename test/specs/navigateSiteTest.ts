import Environment from '../pageobjects/Environment.ts'
import JoinOurTeam from '../pageobjects/JoinOurTeam.ts'
import navigateDesktop from '../pageobjects/navigateDesktop.ts'
import navigateTablet from '../pageobjects/navigateTablet.ts'
import Subscribe from '../pageobjects/Subscribe.ts'

describe.skip('Navigate on Assist Website on desktop', () => {
    it('Loading HomePage', async () => {
        await Environment.loadHomePage()    
        await navigateDesktop.setFullHDResolution()
    })

    it('Go to Company page', async()=>{
        await navigateDesktop.goToCompanyPage()
    })

    it('Go to Blog page', async()=>{
        await navigateDesktop.goToBlogPage()
    })

    it('Expand Services menu', async()=>{
        await navigateDesktop.goToServicesMenu()
    })

    it('Expand Industries menu', async()=>{
        await navigateDesktop.goToIndustriesMenu() 
    })
})

describe.skip('Navigate on Assist Website tablet', ()=> {
    it('Loading Home Page on tablet', async()=>{
        await Environment.loadHomePage()
        await navigateTablet.setTabletResolution()
        
    })

    it('Go to Company page on tablet', async() =>{
        await navigateTablet.goToCompanyPageTablet()
   
    })

    it('Go to Blog page on tablet', async()=>{
        await navigateTablet.goToBlogPageTablet()
    })

    it('Go to Services on tablet', async()=>{
        await navigateTablet.goToServicesTablet()
    })

    it('Go to Industries on tablet', async()=>{
        await navigateTablet.goToIndustriesTablet()
    })
})

describe('Press Join our team button', () => {
    it('Press Join our team', async()=>{
        await JoinOurTeam.clickOnJoinOurTeamButton()
    })
})

describe('Test Subscribe Form from Blog page', () => {
    it('Subscribe with invalid email address', async()=>{
        await Subscribe.subscribeWithInvalidEmail()
    })
})



    /*it('Go to Careers page', async()=>{
        await navigateDesktop.clickOnCareersButton()
        await navigateDesktop.waiForSeconds(1)
        await navigateDesktop.checkCareersUrl()

        
    })*/
   





