import { Null, Undefined } from "./types";

export type Replace<T, R, W> = T extends R ? (W | Null<T> | Undefined<T>) : T;

export type RecursiveReplace<T, R, W> =
    T extends R ? (W | Null<T> | Undefined<T>) : {
        [P in keyof T]:
            T[P] extends (infer U)[] ? RecursiveReplace<U, R, W>[] :
            NonNullable<T[P]> extends R ? (W | Null<T[P]> | Undefined<T[P]>) :
            NonNullable<T[P]> extends Date ? Date | Null<T[P]> | Undefined<T[P]> :    // need a null hack here to get it to register right.
            RecursiveReplace<T[P], R, W>;
    };
