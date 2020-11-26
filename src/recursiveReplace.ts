import { Null, Undefined } from "./types";

export type Replace<T, R, W> = T extends R ? (W | Null<T> | Undefined<T>) : T;

export type RecursiveReplace<T, R, W> =
    T extends R ? (W | Null<T> | Undefined<T>) : {
        [P in keyof T]:
            T[P] extends (infer U)[] ? RecursiveReplace<U, R, W>[] :
            T[P] extends R ? (W | Null<T[P]> | Undefined<T[P]>) :
            RecursiveReplace<T[P], R, W>;
    };
