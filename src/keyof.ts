/**
 * Extracts keys from a type that match the given type. IE:
 * interface MyType {
 *  myNumber1: number;
 *  myNumber2: number;
 *  myBoolean: boolean;
 * }
 * type NumberKeys = KeysOf<MyType, number>; // "myNumber1" | "myNumber2"
 * type BooleanKeys = KeysOf<MyType, boolean>; // "myBoolean"
 */
export type KeysOf<R, T> = {
    [P in keyof R]: R[P] extends T ? P : never;
}[keyof R];
