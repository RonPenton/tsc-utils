import { groupBy } from '../src';

describe('groupBy:', () => {

    test('groups by key', () => {
        const items: { value: number, id: string }[] = [
            {
                value: 1,
                id: "foo"
            },
            {
                value: 2,
                id: "bar"
            },
            {
                value: 3,
                id: "foo"
            }
        ];

        const groups = groupBy(items, x => x.id);

        expect(groups.get("foo")).toStrictEqual([{ value: 1, id: "foo" }, { value: 3, id: "foo" }]);
        expect(groups.get("bar")).toStrictEqual([{ value: 2, id: "bar" }]);
        expect(groups.size).toBe(2);
    });

});
