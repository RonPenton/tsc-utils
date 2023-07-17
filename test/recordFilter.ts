import { recordFilter } from '../src/recordFilter';

describe('records:', () => {

    test('filter', () => {
        const record: Record<string, number | boolean> = {
            foo: 1,
            bar: 2,
            baz: 3,
            qux: true
        };

        const isBoolean = (x: unknown): x is boolean => typeof x === 'boolean';

        const filtered = recordFilter(record, isBoolean);

        expect(filtered).toStrictEqual({ qux: true });
    });
});
