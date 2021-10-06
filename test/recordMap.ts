import { recordMap } from '../src';

describe('record map:', () => {

    test('maps keys', () => {

        const K1 = ['a', 'b', 'c'] as const;
        const map = recordMap(K1, key => String(key));

        expect(map).toStrictEqual({
            a: 'a',
            b: 'b',
            c: 'c'
        });
    });

    test('maps symbols and numbers', () => {

        const b = Symbol('b');
        const K1 = ['a', b, 3] as const;
        const map = recordMap(K1, key => String(key));

        expect(map.a).toBe('a');
        expect(map[b]).toBe('Symbol(b)');
        expect(map[3]).toBe('3');
    });

    test('maps functions', () => {

        const K1 = ['a', 'b', 'c'] as const;
        const helper = (str: string) => str.toUpperCase();
        const map = recordMap(K1, key => () => helper(key));

        expect(map.a()).toBe('A');
        expect(map.b()).toBe('B');
        expect(map.c()).toBe('C');
    });

});
