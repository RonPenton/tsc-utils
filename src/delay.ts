import ow from 'ow';

export function delay(waitMs: number): Promise<void> {
    ow(waitMs, ow.number.positive);

    return new Promise((resolve) => {
        setTimeout(() => resolve(), waitMs);
    });
}
