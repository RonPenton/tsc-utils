import { recordMap, recordMapAsync } from '../src/recordMap';

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

    test('map async', async () => {
        const testAsync = (x: number | boolean): Promise<String> => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(String(x) + 'async');
                }, 10);
            })
        }

        const record: Record<string, number | boolean> = {
            foo: 1,
            bar: 2,
            baz: 3,
            qux: true
        };

        const mapped = await recordMapAsync(record, testAsync);
        expect(mapped).toStrictEqual({
            foo: '1async',
            bar: '2async',
            baz: '3async',
            qux: 'trueasync'
        });

    });
});
