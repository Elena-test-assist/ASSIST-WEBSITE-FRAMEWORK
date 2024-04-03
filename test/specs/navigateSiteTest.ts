import Environment from '../pageobjects/Environment.ts'
import JoinOurTeam from '../pageobjects/JoinOurTeam.ts'
import navigateDesktop from '../pageobjects/navigateDesktop.ts'
import navigateTablet from '../pageobjects/navigateTablet.ts'
import Subscribe from '../pageobjects/Subscribe.ts'
import IndustriesDropdown from '../pageobjects/IndustriesDropdown.ts'
import CompanyElements from '../pageobjects/CompanyElements.ts'
import CareersElements from '../pageobjects/CareersElements.ts'

describe('Navigate on Assist Website on desktop', () => {
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

    it('Verify Categories from Blog are clickable', async()=>{
        await navigateDesktop.verifyCategoriesAreClickable()
    })

    it('Verify Categories from BLog are clickable', async()=>{
        await navigateDesktop.verifyBlogTagsAreClickable()
    })

    it('Expand Services menu', async()=>{
        await navigateDesktop.goToServicesMenu()
    })

    it('Expand Industries menu', async()=>{
        await navigateDesktop.goToIndustriesMenu() 
        
    })
})

describe('Navigate on Assist Website tablet', ()=> {
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

describe('Test Industries Projects', ()=>{
    it('See Automotive Projects', async() => {
        await IndustriesDropdown.seeAutomotiveProjects()
    })

    it('See eHealth Projects', async()=>{
        await IndustriesDropdown.seeHealthProjects()
    })

    it('See Education Projects', async()=>{
        await IndustriesDropdown.clickOnEducationButton()
    })


})

describe('Test elements on Company page', ()=>{
    it('Verify Awards and Recognitions section expands', async()=>{
        await CompanyElements.verifyAwardsandRecognitionsExpands()
    })

    it('Verify compamy certifications expands', async()=>{
        await CompanyElements.verifyCompanyCertificationExpands()
    })

    it('Verify The way we work section expands', async()=>{
        await CompanyElements.verifyTheWayWeWorkExpands()
    })

    it('Verify The way we act section expands', async()=>{
        await CompanyElements.verifyTheWayWeActExpands()
    })

    it('Verify Join Our Team Button works properly', async()=>{
        await CompanyElements.verifyJoinOurTeamButtonWorks()
    })

     it('Verify See All Open Positions button works properly', async()=>{
        await CompanyElements.VerifySeeAllPositionButtonWorks()
    })
})

describe('Test elements on Careers Page', () => {
    it('Verify Explore open positions button works properly', async()=>{
        await CareersElements.goToAllJobsPage()
    })

   it('Verify First Job Single Page opens properly', async()=>{
        await CareersElements.gotoFirstJobPage()
    })

    it('Verify Second Job Single Page opens properly', async()=>{
        await CareersElements.gotoSecondJobPage()
    })

    it('Verify Third Job Single Page opens properly', async()=>{
        await CareersElements.gotoThirdJobPage()
    })

    it('Verify See more open positions button works', async()=>{
        await CareersElements.verifySeeMoreOpenPositionsButton()
    })

    it('Verify user cannot insert invalid email', async()=>{
        await CareersElements.submitWithInvalidName()
    })

    it('Verify user cannot insert invalid phone number', async()=>{
        await CareersElements.submitWithInvalidPhoneNumber()
    })

    it('Verify user cannot insert invalid email address', async()=>{
        await CareersElements.submitWithInvalidEmail()
    })

    it('Verify user cannot insert invalid specialization name', async()=>{
        await CareersElements.submitWithInvalidSpecialization()
    })

    it('Verify user cannot insert invalid additional information', async()=>{
        await CareersElements.submitWithInvalidAdditionalInformation()
    })

})



   





