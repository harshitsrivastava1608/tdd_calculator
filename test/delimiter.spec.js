import { assert } from "chai"
import { checkDelimiter } from "../delimiter.js"

describe('delimiter',()=>{
    it('should begin with // and contain first /n',()=>{
        const result=checkDelimiter('//;\n12')
        assert.isNotNull(result)
    })
})