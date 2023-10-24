/**
 * Maps a record using the transformation function.
 * @param record 
 * @param mapper 
 * @returns 
 */
export function recordMap<T, U>(record: Record<string, T>, mapper: (value: T, key: string, index: number) => U) {
    let output: Record<string, U> = {};
    let idx = 0;
    for (const [key, value] of Object.entries(record)) {
        output[key] = mapper(value, key, idx);
        idx++;
    }
    return output;
}

/**
 * Maps a record using the transformation function asynchronously.
 * @param record 
 * @param mapper 
 * @returns 
 */
export async function recordMapAsync<T, U>(record: Record<string, T>, mapper: (value: T, key: string, index: number) => Promise<U>) {
    let output: Record<string, U> = {};
    let idx = 0;
    for (const [key, value] of Object.entries(record)) {
        output[key] = await mapper(value, key, idx);
        idx++;
    }
    return output;
}
