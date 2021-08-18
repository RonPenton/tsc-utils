import { isEmptyObject } from '../src';

const empty: any = {};

// $ExpectType any
type e1 = typeof empty;

if (isEmptyObject(empty)) {
    // $ExpectType Record<string, never>
    type e2 = typeof empty;
}
