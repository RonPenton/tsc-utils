import { recordMap } from '../src/recordMap';

describe('records:', () => {

    test('map', () => {
        const record: Record<string, number | boolean> = {
            foo: 1,
            bar: 2,
            baz: 3,
            qux: true
        };

        const toString = (x: number | boolean): string => String(x);

        const mapped = recordMap(record, toString);

        expect(mapped).toStrictEqual({ 
            foo: '1',
            bar: '2',
            baz: '3',
            qux: 'true'
        });
    });
});
