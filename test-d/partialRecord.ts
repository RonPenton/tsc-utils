import { PartialRecord } from '../src';

type Names = 'a' | 'b' | 'c';

interface A {
    num: number;
}

const c1: PartialRecord<Names, A> = {};

const c2: PartialRecord<Names, A> = { a: {} }; // $ExpectError

const c3: PartialRecord<Names, A> = { a: { num: 10 } };

const c4: PartialRecord<Names, boolean> = { a: true };

const c5: PartialRecord<Names, boolean> = { b: true };

const c6: PartialRecord<Names, boolean> = { c: true };

const c7: PartialRecord<Names, boolean> = { a: true, b: false };

const c8: PartialRecord<Names, boolean> = { a: true, c: false };

const c9: PartialRecord<Names, boolean> = { a: true, b: false, c: true };

const c10: PartialRecord<Names, boolean> = { a: true, b: false, c: true, d: false }; // $ExpectError
