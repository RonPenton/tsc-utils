export type CoalesceUndefined<T, U> =
    T extends undefined
    ? (
        U extends undefined
        ? T | U
        : Exclude<T, undefined> | U
    )
    : (
        U extends undefined
        ? Exclude<U, undefined> | T
        : T | U
    );

export type CoalesceNullish<T, U> =
    T extends undefined | null
    ? (
        U extends undefined | null
        ? T | U
        : Exclude<T, undefined | null> | U
    )
    : (
        U extends undefined | null
        ? Exclude<U, undefined | null> | T
        : T | U
    );

export function coalesceUndefined<T, U>(a: T, b: U): CoalesceUndefined<T, U> {
    return (a === undefined ? b : a) as any;
}

export function coalesceNullish<T, U>(a: T, b: U): CoalesceNullish<T, U> {
    return (a ?? b) as any;
}

export type ValueOf<T, K> = K extends keyof T ? T[K] : undefined;

export type CoalescedRecord<T, U> = {
    [K in keyof T | keyof U]: CoalesceUndefined<ValueOf<T, K>, ValueOf<U, K>>;
}

export type CoalescedRecordNullish<T, U> = {
    [K in keyof T | keyof U]: CoalesceNullish<ValueOf<T, K>, ValueOf<U, K>>;
}

export function coalesceRecords<
    T extends Record<string, any>,
    U extends Record<string, any>,
    M extends 'undefined' | 'nullish'
>(
    first: T,
    second: U,
    mode: M
): M extends 'undefined' ? CoalescedRecord<T, U> : CoalescedRecordNullish<T, U> {
    const coalesce = mode === 'undefined' ? coalesceUndefined : coalesceNullish;
    const result: any = {};

    const keys = new Set([...Object.keys(first), ...Object.keys(second)]);
    for (const key of keys) {
        result[key] = coalesce(first[key], second[key]);
    }
    return result;
}
