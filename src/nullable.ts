export type Nullable<T> = T | null | undefined;

export type NullableArrayOfNullableObjects<T> = (T | null | undefined)[] | null | undefined;

/**
 * Given a nullable array of objects that may or may not be null, this method
 * returns an array of objects which are not null. This is useful for strictly
 * typing data which may have come from noisy sources.
 * @param array 
 */
function denullify<T>(array: NullableArrayOfNullableObjects<T>): T[] {
    if (!array)
        return [];
    return array.filter(x => x !== null && x !== undefined) as any;
}

export { denullify }
