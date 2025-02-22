import { validateinput,startCal, splitInput,checkNegative } from "../input.js";
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
    it("should be separated by comma or new line",()=>{
        const result=startCal('1\n2,3')
        assert.equal(result,6)
    })
    it("should not contain negative numbers",()=>{
        const midResult = splitInput('1\n-2,3')
        const result=checkNegative(midResult)
        assert.isFalse(result)
    })
})