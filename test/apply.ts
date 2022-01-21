import { apply } from '../src';

describe('apply:', () => {

    test('applies 1', () => {
        function add(a: number, b: number) { return a + b };
        const add10 = apply(add, 10);
        expect(add10(10)).toBe(20);
        expect(add10(20)).toBe(30);
        expect(add10(30)).toBe(40);
        expect(add10(40)).toBe(50);
    });

    test('applies none', () => {
        function add(a: number, b: number) { return a + b };
        const applied = apply(add);
        expect(applied(10, 20)).toBe(30);
    });

    test('applies all', () => {
        function add(a: number, b: number) { return a + b };
        const applied = apply(add, 10, 20);
        expect(applied()).toBe(30);
    });

    test('applies chain', () => {
        function addStrs(a: number, b: boolean, c: string) {
            return String(a) + String(b) + String(c);
        }

        const apply1 = apply(addStrs, 10);
        expect(apply1(true, "foo")).toBe("10truefoo");
        const apply2 = apply(apply1, false);
        expect(apply2("bar")).toBe("10falsebar");
        const apply3 = apply(apply2, "baz");
        expect(apply3()).toBe("10falsebaz");
    })
});
