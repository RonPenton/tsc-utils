// import { expectType, expectError } from 'tsd';
import { KeysOf } from '../src';

interface A {
    num: number;
    num2: number;
    str: string;
    bool: boolean;
    dt: Date;
}

// $ExpectType true
type t1 = "num" extends KeysOf<A, number> ? true : false;

// $ExpectType true
type t2 = "num2" extends KeysOf<A, number> ? true : false;

// $ExpectType false
type t3 = "str" extends KeysOf<A, number> ? true : false;

// $ExpectType false
type t4 = "bool" extends KeysOf<A, number> ? true : false;

// $ExpectType false
type t5 = "dt" extends KeysOf<A, number> ? true : false;
