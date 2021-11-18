const { listDialogBtn } = require("../pageobjects/dialog.page")

describe('sample', ()=>{
    it('sampletest', ()=>{

    })



    it.only('verify scroll', ()=>{
        dialog.activityBtn().click();
        driver.touchAction([
            {action: 'press', x=200, y=1400},
            {action: 'moveTo', x=200, y = 800},
            'release'
        ])
    })


})