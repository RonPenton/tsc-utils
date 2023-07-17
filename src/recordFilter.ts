export function recordFilter<T, S extends T>(record: Record<string, T>, predicate: (value: T, index: number) => value is S): Record<string, S>
export function recordFilter<T>(record: Record<string, T>, predicate: (value: T, index: number) => unknown): Record<string, T>;
export function recordFilter<T>(record: Record<string, T>, predicate: (value: T, index: number) => unknown) {
    let output: Record<string, T> = {};
    let idx = 0;
    for (const [key, value] of Object.entries(record)) {
        if (predicate(value, idx)) {
            output[key] = value;
        }
        idx++;
    }
    return output;
}
