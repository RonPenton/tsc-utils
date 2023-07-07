import { pairChain } from '../src';

describe('pairChain:', () => {

    test('pairs', async () => {
        const values = [1, 2, 3, 4, 5];

        const pairs = [...pairChain(values)];

        expect(pairs).toEqual([
            [1, 2],
            [2, 3],
            [3, 4],
            [4, 5]
        ]);
    });

    test('pairs no values', async () => {
        const values: number[] = [];

        const pairs = [...pairChain(values)];
        expect(pairs).toEqual([]);

    });

    test('pairs one value', async () => {
        const values = [1];

        const pairs = [...pairChain(values)];
        expect(pairs).toEqual([]);

    });


});
