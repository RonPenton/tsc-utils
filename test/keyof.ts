import { keysOf } from '../src';

describe('keyof:', () => {

    test('works', () => {

        const x = {
            a: "foo",
            b: "bar",
            c: "baz"
        };
        const keys = keysOf(x);
        expect(keys[0]).toBe("a");
        expect(keys[1]).toBe("b");
        expect(keys[2]).toBe("c");
        expect(x[keys[0]]).toBe("foo");
    });

});
