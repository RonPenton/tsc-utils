export function recordMap<T, U>(record: Record<string, T>, mapper: (value: T, index: number) => U) {
    let output: Record<string, U> = {};
    let idx = 0;
    for (const [key, value] of Object.entries(record)) {
        output[key] = mapper(value, idx);
        idx++;
    }
    return output;
}
