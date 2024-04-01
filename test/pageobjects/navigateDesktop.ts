import Base from "./Base.ts"
import Environment from "./Environment.ts"
class navigateDesktop extends Base {
    
    public get companyButton(){
        return $('aria/Company')
    }
    public get BlogCategoriesButton(){
        return $('h3=Categories')
    }
 
    public get companyTitle(){
        return $('p=A solid')
    }
 
    public get careersButton(){
        return $('aria/Careers')
    }

    public get blogCategory2D(){
        return $('aria/2D Design')
    }

    public get blogCategoryBackend(){
        return $('aria/Backend')
    }

    public get blogCategoryCommunityEvents(){
        return $('aria/Community events')
    }

    public get blogCategoryFrontend(){
        return $('aria/Front-end')
    }

    public get blogCategoryGaming(){
        return $('aria/Gaming')
    }

    public get blogCategoryPython(){
        return $('aria/Python')
    }


 
    public get careerTitle(){
        return $('p=Join us and work in a')
    }
 
    public get blogButton(){
        return $('aria/Blog')
    }
 //title s
    public get blogTitle(){
        return $('p=News, insights and advices from our team')
    }
 
    public get servicesButton(){
        return $('a[data-nav-id="Services"]')
    }
 
    public get industriesButton(){
        return $('a[data-nav-id="Industries"]')
    }
 
    public get servicesDropdown(){
        return $('aria/Services')
    }
 
    public get industriesDropdown(){
        return $('aria/Industries')
    }

    public get seeAllBlogPostsButton(){
        return $('aria/See all blog posts')
    }
 
 
    public async clickOnCompanyButton(){
        await this.companyButton.waitForDisplayed()
        await this.companyButton.click()
 
    }
 
    public async goToCompanyPage(){
        await this.clickOnCompanyButton()
        await this.waiForSeconds(1)
        await Environment.checkPageSuccessfullyLoaded()
        await (this.companyTitle).waitForExist()
        await expect(this.companyTitle).toHaveText('A solid track record'+ '\n' + 'of delivering high-quality services')
    }
    
 
    public async clickOnCareersButton(){
        await this.careersButton.waitForDisplayed
        await this.careersButton.click()
    }
 
    public async goToCareersPage(){
        await this.clickOnCareersButton()
        await this.waiForSeconds(1)
        await Environment.checkPageSuccessfullyLoaded()
        await this.careerTitle.waitForExist()
        await expect(this.careerTitle).toHaveText('Join us and work in a creative & innovative environment')
        
    }
 
    public async clickOnBlogButton(){
        await this.blogButton.waitForDisplayed
        await this.blogButton.click()
    }
 
 
    public async goToBlogPage(){
        await this.clickOnBlogButton()
        await this.waiForSeconds(1)
        await Environment.checkPageSuccessfullyLoaded()
        await (await this.blogTitle).waitForExist()
        await expect(this.blogTitle).toHaveText('News, insights and advices from our team')
 
    }
 
    public async clickOnServicesButton(){
        await (await this.servicesButton).waitForExist
        await (await this.servicesButton).waitForDisplayed
        await this.servicesButton.click()
    }
 
    public async goToServicesMenu(){
        await this.clickOnServicesButton()
        await this.waiForSeconds(1)
        await Environment.checkPageSuccessfullyLoaded()
        await this.servicesDropdown.waitForExist()
        await expect(this.servicesDropdown).toHaveText('Services')
    }
 
 
    public async clickOnIndustriesButton(){
        await this.industriesButton.waitForDisplayed
        await this.industriesButton.click()
    }
 
    public async goToIndustriesMenu(){
        await this.clickOnIndustriesButton()
        await this.waiForSeconds(1)
        await Environment.checkPageSuccessfullyLoaded()
        await this.industriesDropdown.waitForExist()
        await expect(this.industriesDropdown).toHaveText('Industries')
    }    
    public async clickSeeAllBlogPostsButton(){
        await this.seeAllBlogPostsButton.waitForExist()
        await this.seeAllBlogPostsButton.click()


    }

    public async preeSeeAllBlogPostsButton(){
    await Environment.loadHomePage()
    await this.clickSeeAllBlogPostsButton()
    await Environment.checkPageSuccessfullyLoaded()
    await (await this.blogTitle).waitForExist()
    await expect(this.blogTitle).toHaveText('News, insights and advices from our team')
   
    
    }
    public async clickBlogCategoriesButton(){
        await this.BlogCategoriesButton.waitForDisplayed()
        await this.BlogCategoriesButton.click()
    }
    public async expandBlogCategories(){
        await this.clickBlogCategoriesButton()
        await this.blogCategory2D.waitForDisplayed()
        await expect(this.blogCategory2D).toHaveText('2D Design')
        await this.blogCategory2D.isClickable()
        await this.blogCategoryBackend.waitForDisplayed()
        await expect(this.blogCategoryBackend).toHaveText('Backend')
        await this.blogCategoryBackend.isClickable()
        await this.blogCategoryCommunityEvents.waitForDisplayed()
        await expect(this.blogCategoryCommunityEvents).toHaveText('Community events')
        await this.blogCategoryCommunityEvents.isClickable()
        await this.blogCategoryFrontend.waitForDisplayed()
        await expect(this.blogCategoryFrontend).toHaveText('Front-end')
        await this.blogCategoryFrontend.isClickable()
        await this.blogCategoryGaming.waitForDisplayed()
        await expect(this.blogCategoryGaming).toHaveText('Gaming')
        await this.blogCategoryGaming.isClickable()
        await this.blogCategoryPython.waitForDisplayed()
        await expect(this.blogCategoryPython).toHaveText('Python')
        await this.blogCategoryPython.isClickable()

    }
}
export default new navigateDesktop()
 
 
 