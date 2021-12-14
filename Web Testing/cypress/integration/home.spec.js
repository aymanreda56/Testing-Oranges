import { HomePage } from "../pageObjects/home"

describe('Home page tests',()=>{
    const homeOBJ = new HomePage();

    beforeEach(()=>{
        homeOBJ.navigate();
      
    })

    it('TEST', () => {
        homeOBJ.tumblriconValidation();
    })
})