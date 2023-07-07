import { bifurcate } from '../src';

describe('bifurcate:', () => {

    test('bifurcates', () => {
        const isEven = (a: number) => a % 2 == 0;
        const items = [1,2,3,4,5,6,7,8,9];
        const [evens, odds] = bifurcate(items, isEven);
        expect(evens).toStrictEqual([2,4,6,8]);
        expect(odds).toStrictEqual([1,3,5,7,9]);
    });
});
