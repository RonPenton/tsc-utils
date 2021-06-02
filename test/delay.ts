import { delay } from '../src';

describe('delay:', () => {

    test('waits', async () => {
        const now = new Date().valueOf();
        await delay(1000);
        const then = new Date().valueOf();
        expect(now + 1000).toBeLessThanOrEqual(then);
    });

});
