import { filterIterable, mapIterable, reduceIterable } from '../src';

describe('iterables:', () => {

    test('filters', () => {
        const map = new Map([["foo", 1], ["bar", 2], ["baz", 3]]);

        const filtered = Array.from(filterIterable(map.values(), x => x != 2));

        expect(filtered[0]).toBe(1);
        expect(filtered[1]).toBe(3);
    });

    test('filters type check', () => {
        const map = new Map<string, string | number>([["foo", 1], ["bar", "2"], ["baz", 3]]);

        function isNumber(x: unknown): x is number { return typeof x === 'number' };

        const filtered = Array.from(filterIterable(map.values(), isNumber));

        expect(filtered[0]).toBe(1);
        expect(filtered[1]).toBe(3);
    });


    test('maps', () => {
        const map = new Map([["foo", 1], ["bar", 2], ["baz", 3]]);

        const mapped = Array.from(mapIterable(map.values(), x => x + 2));

        expect(mapped[0]).toBe(3);
        expect(mapped[1]).toBe(4);
        expect(mapped[2]).toBe(5);
    });

    test('reduces', () => {
        const map = new Map([["foo", 1], ["bar", 2], ["baz", 3]]);

        const reduced = reduceIterable(map.values(), (acc, c) => acc + c, 0);

        expect(reduced).toBe(6);
    });

    test('reduces type', () => {
        const map = new Map([["foo", 1], ["bar", 2], ["baz", 3]]);

        const reduced = reduceIterable(map.values(), (acc, c) => acc + c, '0');

        expect(reduced).toBe('0123');
    });

});
