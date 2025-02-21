import { calculator } from "../calculator.js";
import { assert } from "chai";

describe('calculator',()=>{
    it("should return 0 for no input",()=>{
        const result = calculator();
        assert.equal(result,0)
    })
    it('should return the number when 1 input is provided',()=>{
        const result = calculator(5);
        assert.equal(result,5)
    })
    it('should add up the numbers when 2 input are provided',()=>{
        const result = calculator(1,2);
        assert.equal(result,3)
    })
    it('should return sum of as many number provided',()=>{
        const result = calculator(1,2,3,4,5,5)
        assert.equal(result,20)
    })    
})