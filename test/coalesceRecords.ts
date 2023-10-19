import { coalesceRecords } from '../src/coalesceRecords';

describe('coalesceRecords:', () => {

    test('coalesces simple records', () => {

        const a = { a: 1, b: 2 };
        const b = { b: 3, c: 4 };

        const result = coalesceRecords(a, b, 'undefined');

        expect(result).toStrictEqual({ a: 1, b: 2, c: 4 });
    });

    test('coalesces complex records', () => {
        const a = { a: 1, b: 'foo', c: { d: 2, e: 3 } };
        const b = { b: 2, d: [1, 2, 3] };

        const result = coalesceRecords(a, b, 'undefined');

        expect(result).toStrictEqual({ a: 1, b: 'foo', c: { d: 2, e: 3 }, d: [1, 2, 3] });
    });

    test('coalesces undefined', () => {

        const a = { a: 1, b: 2 };
        const b = { b: undefined, c: 4 };

        const result = coalesceRecords(a, b, 'undefined');

        expect(result).toStrictEqual({ a: 1, b: 2, c: 4 });
    });

    test('coalesces identity', () => {

        const a = {};
        const b = { b: undefined, c: 4 };

        const result = coalesceRecords(a, b, 'undefined');

        expect(result).toStrictEqual({ b: undefined, c: 4 });
    });

    test('coalesces and keeps nulls', () => {

        const a = { b: null, c: 5 };
        const b = { b: 22, c: 4 };

        const result = coalesceRecords(a, b, 'undefined');

        expect(result).toStrictEqual({ b: null, c: 5 });
    });

    test('coalesces any nullish value', () => {

        const a = { b: null, c: 5 };
        const b = { b: 22, c: 4 };

        const result = coalesceRecords(a, b, 'nullish');

        expect(result).toStrictEqual({ b: 22, c: 5 });
    });

});
