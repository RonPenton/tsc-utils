export function filterKeys<T extends Record<string, any>, K extends keyof T>(record: T, keys: readonly K[]): {
    [P in K]: T[P];
} {
    const output: any = {};
    for (const key of keys) {
        output[key] = record[key];
    }
    return output;
}
