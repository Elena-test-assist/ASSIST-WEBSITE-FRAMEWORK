
import navigateDesktop from '../pageobjects/navigateDesktop.js'

describe('Navigate on Assist Website', () => {
    it('Loading HomePage', async () => {
        await navigateDesktop.visit()
        await navigateDesktop.waiForSeconds(1)
        await navigateDesktop.setFullHDResolution()
        await navigateDesktop.waiForSeconds(1)
        await navigateDesktop.assertPageIsVisible()
        await navigateDesktop.assertPageHasText()     
    })

    it('Go to Company page', async()=>{
        await navigateDesktop.clickOnCompanyButton()
        await navigateDesktop.waiForSeconds(1)
        await navigateDesktop.checkCompanyUrl()
        await navigateDesktop.assertCompanyPageHasText()
        await navigateDesktop.assertCompanyPageIsVisible()

    })

    it('Go to Blog page', async()=>{
        await navigateDesktop.clickOnBlogButton()
        await navigateDesktop.waiForSeconds(1)
        await navigateDesktop.checkBlogsUrl()
        await navigateDesktop.assertBlogPageIsVisible()
        await navigateDesktop.assertBlogPageHasText()
    })
    })


