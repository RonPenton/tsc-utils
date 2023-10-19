import { filterKeys } from '../src/filterKeys';

describe('filterKeys:', () => {

    test('filters keys', () => {

        const a = { a: 1, b: 2, c: 3, d: 4 };
        const b = filterKeys(a, ['a', 'c']);
        expect(b).toStrictEqual({ a: 1, c: 3 });
    });

});
