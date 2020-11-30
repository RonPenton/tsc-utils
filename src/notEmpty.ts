export function notEmpty<TValue>(value: TValue | null | undefined): value is TValue {
    return value !== null && value !== undefined;
}

export function notNull<TValue>(value: TValue | null): value is TValue {
    return value !== null;
}

export function notUndefined<TValue>(value: TValue | undefined): value is TValue {
    return value !== undefined;
}
