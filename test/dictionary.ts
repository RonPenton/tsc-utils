import { iterateDictionary, toMap, toDictionary } from '../src';

describe('dictionary:', () => {

    test('iterates', () => {
        const dict = {
            'foo': 1,
            'bar': 2,
            'baz': 3
        }

        let accumulator = 0;
        iterateDictionary(dict, (_k, v) => {
            accumulator += v;
        });

        expect(accumulator).toBe(6);
    });

    test('to map', () => {
        const dict = {
            'foo': 1,
            'bar': 2,
            'baz': 3
        }

        const map = toMap(dict);
        expect(map.get('foo')).toBe(1);
        expect(map.get('bar')).toBe(2);
        expect(map.get('baz')).toBe(3);

    });

    test('to dictionary', () => {
        const map = new Map([['foo', 1], ['bar', 2], ['baz', 3]]);

        const dict = toDictionary(map);

        expect(dict['foo']).toBe(1);
        expect(dict['bar']).toBe(2);
        expect(dict['baz']).toBe(3);
    });

});
