import { Primitive } from "./primitive";

export type PrimitiveOrDate = Primitive | Date;

export type PrimitiveKeys<T> = {
    [K in keyof T]: T[K] extends PrimitiveOrDate ? K : never;
}[keyof T];

export type OptionalPrimitives<T> = {
    [K in PrimitiveKeys<T>]?: T[K] | null;
}

export type OptionalLeaves<T> =
    T extends PrimitiveOrDate ? T :
    T extends (infer U)[] ? OptionalLeaves<U>[] :
    OptionalPrimitives<T> & {
        [K in keyof Omit<T, PrimitiveKeys<T>>]: OptionalLeaves<T[K]>
    };
