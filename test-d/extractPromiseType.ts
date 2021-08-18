import { ExtractPromiseType } from '../src';

type x = Promise<number>;

// $ExpectType number
type extracted = ExtractPromiseType<x>;
