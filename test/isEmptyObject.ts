import { isEmptyObject } from '../src';

describe('isEmptyObject:', () => {

    test('empty', async () => {
        const empty = isEmptyObject({});
        expect(empty).toBe(true);
    });

    test('null', async () => {
        const empty = isEmptyObject(null);
        expect(empty).toBe(false);
    });

    test('undefined', async () => {
        const empty = isEmptyObject(undefined);
        expect(empty).toBe(false);
    });

    test('Date', async () => {
        const empty = isEmptyObject(new Date());
        expect(empty).toBe(false);
    });

    test('array', async () => {
        const empty = isEmptyObject([10,20,30]);
        expect(empty).toBe(false);
    });

    test('empty array', async () => {
        const empty = isEmptyObject([]);
        expect(empty).toBe(false);
    });

    test('obj', async () => {
        const empty = isEmptyObject({ isEmpty: false });
        expect(empty).toBe(false);
    });

    test('symbol', async () => {
        let obj: any = {};
        obj[Symbol('a')] = 'a';
        const empty = isEmptyObject(obj);
        expect(empty).toBe(false);
    });

});
