import { curry } from '../src';

describe('curry:', () => {

    test('curries 1', () => {
        function add(a: number, b: number) { return a + b };
        const add10 = curry(add, 10);
        expect(add10(10)).toBe(20);
        expect(add10(20)).toBe(30);
        expect(add10(30)).toBe(40);
        expect(add10(40)).toBe(50);
    });

    test('curries none', () => {
        function add(a: number, b: number) { return a + b };
        const curried = curry(add);
        expect(curried(10, 20)).toBe(30);
    });

    test('curries all', () => {
        function add(a: number, b: number) { return a + b };
        const curried = curry(add, 10, 20);
        expect(curried()).toBe(30);
    });

    test('curries chain', () => {
        function addStrs(a: number, b: boolean, c: string) {
            return String(a) + String(b) + String(c);
        }

        const curry1 = curry(addStrs, 10);
        expect(curry1(true, "foo")).toBe("10truefoo");
        const curry2 = curry(curry1, false);
        expect(curry2("bar")).toBe("10falsebar");
        const curry3 = curry(curry2, "baz");
        expect(curry3()).toBe("10falsebaz");
    })
});
