import { Primitive } from "@sindresorhus/is";

export type FullyPartial<T> = {
    [P in keyof T]?:
    T[P] extends (infer U)[] ? FullyPartial<U>[] :
    T[P] extends Primitive ? T[P] :
    T[P] extends Date ? Date :
    FullyPartial<T[P]>;
};
