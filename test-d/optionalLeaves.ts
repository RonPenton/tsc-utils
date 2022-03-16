import { OptionalLeaves } from '../src';

interface A {
    num: number;
    str: string;
    bool: boolean;
    foo: {
        num: number;
        str: string;
        dt: Date;
    };
    ar: string[];
    ar2: Array<{
        arnum: number;
        arstr: string;
        ardt: Date;
        arbl: boolean;
        arobj: {
            arobjnum: number;
        }
    }>;
}

interface B extends A {
    foo: {
        num: number;
        str: string;
        dt: Date;
        req: {
            quux: number;
        }
    };
}

type t1 = OptionalLeaves<A>;
type t2 = OptionalLeaves<B>;

const w: t1 = {
    foo: {},
    ar: [],
    ar2: [{
        arobj: []
    }]
};

const x: t2 = {
    foo: {
        req: {}
    },
    ar: [],
    ar2: [{
        arobj: []
    }]
};
