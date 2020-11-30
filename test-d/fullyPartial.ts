import { FullyPartial } from '../src';

interface A {
    num: number;
    str: string;
    bool: boolean;
    foo: {
        num: number;
        str: string;
        dt: Date;
    };
}

type t1 = FullyPartial<A>;

const c1: t1 = {};
const c2: t1 = { foo: {} };
const c3: t1 = { num: 42, str: undefined, foo: { dt: new Date() } };
