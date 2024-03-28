import navigateDesktop from '../pageobjects/navigateDesktop.ts'
import navigateTablet from '../pageobjects/navigateTablet.ts'
describe('Navigate on Assist Website on desktop', () => {
    it('Loading HomePage', async () => {
        await navigateDesktop.loadHomePage()    
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


describe('Navigate on Assist Website tablet', ()=> {
    it('Loading Home Page on tablet', async()=>{
        await navigateTablet.loadHomePageTablet()
    })

    it('Go to Company page on tablet', async() =>{
        await navigateTablet.goToCompanyPageTablet()
   
    })
})

    /*it('Go to Careers page', async()=>{
        await navigateDesktop.clickOnCareersButton()
        await navigateDesktop.waiForSeconds(1)
        await navigateDesktop.checkCareersUrl()

        
    })*/
    })





