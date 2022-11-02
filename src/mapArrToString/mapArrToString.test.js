const mapAppToString = require('./mapArrToString')

describe('map array to string', ()=>{
    test('simple change of array', ()=>{
        expect(mapAppToString([1, 2, 3])).toEqual(['1', '2', '3'])
    })
    test('Advanced change of array', ()=>{
        expect(mapAppToString([1, 2, null, undefined, "hello",  3])).toEqual(['1', '2', '3'])
    })
    test('denial result of transformation', ()=>{
        expect(mapAppToString([1, 2, 3, 4])).not.toEqual([1,2,3])
    })
})