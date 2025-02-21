import { validateinput,startCal } from "../input.js";
import { assert } from "chai";
describe('input',()=>{
    it("should contain some value",()=>{
        const result=validateinput("")
        assert.isTrue(result)
    })
    it("should contain no value",()=>{
        const result=validateinput()
        assert.isTrue(result)
    })
    it("should be separated by comma",()=>{
        const result=startCal('1,2,3')
        assert.equal(result,6)
    })
})