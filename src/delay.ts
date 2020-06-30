import ow from 'ow';

function delay(waitMs: number): Promise<void> {
    ow(waitMs, ow.number.positive);

    return new Promise((resolve) => {
        setTimeout(() => resolve(), waitMs);
    });
}
