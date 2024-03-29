export default class Base {
    
    // define selectors using getter methods

    
    public async waiForSeconds(seconds: number){
        await browser.pause(seconds * 1000)

    }

    public async setFullHDResolution(){
        await browser.setWindowSize(1980, 1080)
    }

    public async setTabletResolution(){
        await browser.setWindowSize(1200, 800)
    }

 }
 
 
 
 