import { keyMap } from '../src';

describe('key map:', () => {

    test('maps keys', () => {

        const keys = ['a', 'b', 'c'] as const;
        type Key = typeof keys[number];
        const map = keyMap<Key, {[K in Key]: K[]}>(keys, _ => []);

        expect(map).toStrictEqual({
            a: [],
            b: [],
            c: []
        });
    });
});
