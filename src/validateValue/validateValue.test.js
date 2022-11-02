

const validateValue = require('./validateValue')

describe('validate value', ()=>{
    test('between limits', ()=>{
        expect(validateValue(50)).toBe(true)
    })
    test('less then low limit', ()=>{
        expect(validateValue(-1)).toBe(false)
    })
    test('great then upper limit', ()=>{
        expect(validateValue(101)).toBe(false)
    })
    test('lower limit', ()=>{
        expect(validateValue(0)).toBe(  true)
    })
    test('upper limit', ()=>{
        expect(validateValue(100)).toBe(true)
    })
})