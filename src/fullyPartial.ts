import { Primitive } from "@sindresorhus/is";
import { Null } from "./types";

export type FullyPartial<T> = {
    [P in keyof T]?:
    NonNullable<T[P]> extends Date ? Date | Null<T[P]> :    // need a null hack here to get it to register right.
    T[P] extends (infer U)[] ? FullyPartial<U>[] :          // process arrays.
    T[P] extends Primitive ? T[P] :                         // process primitives.
    FullyPartial<T[P]>;
};
