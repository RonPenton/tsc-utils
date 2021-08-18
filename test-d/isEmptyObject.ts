import { isEmptyObject, EmptyObject } from '../src';

const empty: any = {};

// $ExpectType any
type e1 = typeof empty;

if (isEmptyObject(empty)) {
    // $ExpectType EmptyObject
    type e2 = typeof empty;
}
