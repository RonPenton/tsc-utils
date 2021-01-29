import { mapMap } from '../src';

describe('map:', () => {

    test('transforms values', () => {
        const map = new Map([["foo", 1], ["bar", 2], ["baz", 3]]);

        const mapped = mapMap(map, x => x + 1);

        expect(mapped.get("foo")).toBe(2);
        expect(mapped.get("bar")).toBe(3);
        expect(mapped.get("baz")).toBe(4);
    });

    test('transforms keys', () => {
        const map = new Map([["foo", 1], ["bar", 2], ["baz", 3]]);

        const mapped = mapMap(map, undefined, k => k + "bar");

        expect(mapped.get("foobar")).toBe(1);
        expect(mapped.get("barbar")).toBe(2);
        expect(mapped.get("bazbar")).toBe(3);
    });

    test('Change Types', () => {
        const map = new Map([[1, 1], [2, 2], [3, 3]]);

        const mapped = mapMap(map, v => v + "baz", k => k + "bar");

        expect(mapped.get("1bar")).toBe("1baz");
        expect(mapped.get("2bar")).toBe("2baz");
        expect(mapped.get("3bar")).toBe("3baz");
    });


});
