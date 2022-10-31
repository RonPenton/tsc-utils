import { objectMap, typedObjectMap } from '../src';

describe('map:', () => {

    test('transforms values', () => {
        const map = {
            "foo": 1,
            "bar": 2,
            "baz": 3
        };

        const mapped = objectMap(map, x => x + 1);

        expect(mapped["foo"]).toBe(2);
        expect(mapped["bar"]).toBe(3);
        expect(mapped["baz"]).toBe(4);
    });

    test('transforms keys', () => {
        const map = {
            "foo": 1,
            "bar": 2,
            "baz": 3
        };

        const mapped = objectMap(map, undefined, k => k + "bar");

        expect(mapped["foobar"]).toBe(1);
        expect(mapped["barbar"]).toBe(2);
        expect(mapped["bazbar"]).toBe(3);
    });

    test('Change Types', () => {
        const map = { "one": 1, "two": 2, "three": 3 };

        const mapped = objectMap(map, v => v + "baz", k => k + "bar");

        expect(mapped["onebar"]).toBe("1baz");
        expect(mapped["twobar"]).toBe("2baz");
        expect(mapped["threebar"]).toBe("3baz");
    });

    test('Typed Object Map', () => {
        const map = { "one": 1, "two": 2, "three": 3 };

        const mapped = typedObjectMap(map, (v, k) => k + v);

        expect(mapped.one).toBe("one1");
        expect(mapped.two).toBe("two2");
        expect(mapped.three).toBe("three3");
    });

});
