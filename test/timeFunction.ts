import { timeFunction } from '../src/timeFunction';
import { delay } from '../src/delay';

describe('timeFunction:', () => {

    test('counts', async () => {
        const { time } = await timeFunction(delay(1000));
        console.log({ time });

        expect(time).toBeLessThan(1100);
        expect(time).toBeGreaterThan(999);
    });

});
