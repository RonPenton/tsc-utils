import { notEmpty } from "./notEmpty";

export type Nullable<T> = T | null | undefined;

export type NullableArrayOfNullableObjects<T> = Nullable<Nullable<T>[]>;

/**
 * Given a nullable array of objects that may or may not be null, this method
 * returns an array of objects which are not null. This is useful for strictly
 * typing data which may have come from noisy sources.
 * @param array 
 */
function denullify<T>(array: NullableArrayOfNullableObjects<T>): T[] {
    if (!array)
        return [];
    return array.filter(notEmpty);
}

export { denullify }
