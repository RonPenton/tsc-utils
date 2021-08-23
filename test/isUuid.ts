import * as uuid from '../src/isUuid';

describe('isUuid:', () => {

    test('undefined', async () => {
        const is = uuid.isUuid(undefined);
        expect(is).toBe(false);
    });

    test('null', async () => {
        const is = uuid.isUuid(null);
        expect(is).toBe(false);
    });

    test('number', async () => {
        const is = uuid.isUuid(12161711198649421137191581147115);
        expect(is).toBe(false);
    });

    test('uuid', async () => {
        const is = uuid.isUuid('d3c5dbd0-0413-11ec-9a03-0242ac130003');
        expect(is).toBe(true);
    });

    test('uuid v1', async () => {
        const is = uuid.isUuidv1('d3c5dbd0-0413-11ec-9a03-0242ac130003');
        expect(is).toBe(true);
    });

    test('uuid not v4', async () => {
        const is = uuid.isUuidv4('d3c5dbd0-0413-11ec-9a03-0242ac130003');
        expect(is).toBe(false);
    });

    test('uuid v4', async () => {
        const is = uuid.isUuidv4('3078353b-a979-4e1a-a92b-58414c6191c8');
        expect(is).toBe(true);
    });

});
