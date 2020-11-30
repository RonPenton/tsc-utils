import { notNull, notUndefined } from '../src';

describe('notEmpty', () => {

    const arr = [12, undefined, null, 32];

    test('removes nulls', () => {
        const result = arr.filter(notNull);
        expect(result).toStrictEqual([12, undefined, 32]);
    });

    test('removes undefined', () => {
        const result = arr.filter(notUndefined);
        expect(result).toStrictEqual([12, null, 32]);
    });

});
