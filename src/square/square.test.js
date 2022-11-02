const square = require('./square')

describe('square', ()=>{
    let mockVal
    beforeEach(()=>{
        mockVal = 2
    })
    beforeAll(()=>{
    })
    test('simple count of numbers square', ()=>{
        expect(square(2)).toBe(4)
        expect(square(2)).toBeLessThan(5)
        expect(square(2)).toBeLessThanOrEqual(4)
        expect(square(2)).toBeGreaterThan(3)
        expect(square(2)).not.toBeUndefined()

    })
    afterAll(()=>{

    })
    afterEach(()=>{
        jest.clearAllMocks()
    })
    test("spy on method Math.pow not 1", ()=>{
        const spyMathPow = jest.spyOn(Math, 'pow')
        square(3)
        expect(spyMathPow).toBeCalledTimes(1)
    })
    test("spy on method Math.pow for 1", ()=>{
        const spyMathPow = jest.spyOn(Math, 'pow')
        square(1)
        expect(spyMathPow).toBeCalledTimes(0)
    })
})