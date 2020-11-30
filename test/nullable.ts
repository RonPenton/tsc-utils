import { denullify } from '../src';

describe('denullify:', () => {

    test('removes nulls', () => {
        const result = denullify([12, undefined, 134, 54]);
        expect(result).toStrictEqual([12, 134, 54]);
    });

    test('returns an empty array', () => {
        const result = denullify(null);
        expect(result).toStrictEqual([]);
    });

});
