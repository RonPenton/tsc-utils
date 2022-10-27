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


/**
 * Not truly typesafe but 99% of the time it's good enough really. 
 * Don't use this if you're using polymorphism. 
 * @param t 
 */
export function keysOf<T extends {}>(t: T): (keyof T)[] {
    return Object.keys(t) as any;
}
