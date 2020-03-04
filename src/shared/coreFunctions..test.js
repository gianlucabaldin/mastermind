import { checkRightNumberWrongPosition } from './coreFunctions';

it('should count 0 right number in wrong position', ()=>{
    expect(checkRightNumberWrongPosition([1,2,3], [4,5,6])).toBe(0);
})