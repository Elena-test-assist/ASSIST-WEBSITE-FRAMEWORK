import Base from "./Base.ts"
import navigateDesktop from "./navigateDesktop.ts"
import Environment from "./Environment.ts"

class Industries extends Base{ 
    public get automotiveButton(){
        return $('aria/Automotive')
    }

    public get AutomotiveProjectImage(){
        return $('aria/Project')
    }

    public get HealthProjectImage(){
        return $('aria/projectHeal')
    }

    public get firstAutomotiveProject(){
        return $('aria/RiteApp')
    }

    public get eHealthButton(){
        return $('aria/E-Health')
    }

    public get firsteHealthProject(){
        return $('aria/HealthPoint')
    }

    public get educationButton(){
        return $('aria/Education')
    }

    public get firstEducationProject(){
        return $('aria/RiteApp')
    }

    public async clickOnAutomotiveButton(){

        await this.automotiveButton.waitForDisplayed()
        await this.automotiveButton.click()
        await this.waiForSeconds(3)
        await this.firstAutomotiveProject.waitForDisplayed()
        await expect(this.firstAutomotiveProject).toHaveText('RiteApp')
        await expect(this.AutomotiveProjectImage).toHaveAttribute('src','/_next/image?url=http%3A%2F%2Fassist-website-alb-dev-1819284508.eu-west-1.elb.amazonaws.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fthumbnail%2Fpublic%2Fprojects%2Fpromoted_images%2FImage.png%3Fitok%3DXKDVKhir&w=256&q=75' )
    
    

    }

    public async seeAutomotiveProjects(){
        await Environment.loadHomePage()
        await Environment.setFullHDResolution()
        await navigateDesktop.goToIndustriesMenu()
        await this.clickOnAutomotiveButton()
    }

    public async clickOnHealthButton(){
        await this.eHealthButton.waitForDisplayed()
        await this.eHealthButton.click()
        await this.waiForSeconds(3)
        await this.firsteHealthProject.waitForDisplayed()
        await expect(this.firsteHealthProject).toHaveText('HealthPoint')
        await expect(this.HealthProjectImage).toHaveAttribute('src', '/_next/image?url=http%3A%2F%2Fassist-website-alb-dev-1819284508.eu-west-1.elb.amazonaws.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fthumbnail%2Fpublic%2Fprojects%2Fpromoted_images%2Fhealthpoint-logo_0.png%3Fitok%3DRUn-6wb6&w=256&q=75')

    }

    public async seeHealthProjects(){
        await Environment.loadHomePage()
        await Environment.setFullHDResolution()
        await navigateDesktop.goToIndustriesMenu()
        await this.clickOnHealthButton()

    }

    public async clickOnEducationButton(){

        await this.educationButton.waitForDisplayed()
        await this.educationButton.click()
        await this.waiForSeconds(3)
        await this.firstEducationProject.waitForDisplayed()
        await expect(this.firstEducationProject).toHaveText('RiteApp')
        await expect(this.AutomotiveProjectImage).toHaveAttribute('src','/_next/image?url=http%3A%2F%2Fassist-website-alb-dev-1819284508.eu-west-1.elb.amazonaws.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fthumbnail%2Fpublic%2Fprojects%2Fpromoted_images%2FImage.png%3Fitok%3DXKDVKhir&w=256&q=75' )
    
}

public async seeEducationProjects(){
    await Environment.loadHomePage()
    await Environment.setFullHDResolution()
    await navigateDesktop.goToIndustriesMenu()
    await this.clickOnEducationButton()
 
}
}

export default new Industries()