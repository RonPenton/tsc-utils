export function delay(waitMs: number): Promise<void> {
    if(waitMs < 0) {
        throw new Error(`waitMs is required to be a positive number: ${waitMs}`);
    }

    return new Promise((resolve) => {
        setTimeout(() => resolve(), waitMs);
    });
}
