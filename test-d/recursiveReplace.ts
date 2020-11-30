import { RecursiveReplace } from '../src';

interface A {
    num: number;
    str: string;
    bool: boolean;
    dt: Date;
}

/** Replace at the top level. */
const c1: RecursiveReplace<A, Date, string> = { num: 123, str: "123", bool: true, dt: new Date() }; // $ExpectError
const c2: RecursiveReplace<A, string, boolean> = { num: 123, str: "123", bool: true, dt: new Date() }; // $ExpectError
const c3: RecursiveReplace<A, boolean, string> = { num: 123, str: "123", bool: true, dt: new Date() }; // $ExpectError
const c4: RecursiveReplace<A, number, boolean> = { num: 123, str: "123", bool: true, dt: new Date() }; // $ExpectError

// $ExpectType { num: number; str: string; bool: boolean; dt: string; }
type t1 = RecursiveReplace<A, Date, string>;

// $ExpectType { num: number; str: boolean; bool: boolean; dt: Date; }
type t2 = RecursiveReplace<A, string, boolean>;

// $ExpectType { num: number; str: string; bool: string; dt: Date; }
type t3 = RecursiveReplace<A, boolean, string>;

// $ExpectType { num: boolean; str: string; bool: boolean; dt: Date; }
type t4 = RecursiveReplace<A, number, boolean>;

// $ExpectType { num: number; str: string; bool: Date; dt: Date; }
type t5 = RecursiveReplace<A, boolean, Date>;

/** Replace nulls */
interface B {
    num: number;
    dt?: Date;
}

// $ExpectError
const c5: RecursiveReplace<B, Date, string> = ({ num: 123, dt: new Date() });

// $ExpectType { num: number; dt?: string | undefined; }
type t6 = RecursiveReplace<B, Date, string>;

// $ExpectType { a: number; b: string | null; }
type t7 = RecursiveReplace<{ a: number; b: Date | null; }, Date, string>;

// $ExpectType { a: number; b?: string | null | undefined; }
type t8 = RecursiveReplace<{ a: number; b?: Date | null; }, Date, string>;

/** Recursive replacement */

// $ExpectType { a: number; b: string; c: { d: string; }; }
type t9 = RecursiveReplace<{ a: number; b: Date; c: { d: Date } }, Date, string>;

/** Object Replacement */

// $ExpectType { a: number; b: string; }
type t10 = RecursiveReplace<{ a: number; b: { c: boolean; d: boolean } }, { c: boolean; d: boolean }, string>;

/** RegExp Replacement */

// $ExpectType { a: string; b: number; }
type t11 = RecursiveReplace<{ a: RegExp, b: number }, RegExp, string>;

// $ExpectType { a: RegExp; b: number; }
type t12 = RecursiveReplace<{ a: string, b: number }, string, RegExp>;
