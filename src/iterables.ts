
export function filterIterable<T, S extends T>(iterable: IterableIterator<T>, predicate: (value: T, index: number) => value is S): Generator<S, void, unknown>;
export function filterIterable<T>(iterable: IterableIterator<T>, predicate: (value: T, index: number) => unknown): Generator<T, void, unknown>;
export function* filterIterable<T>(iterable: IterableIterator<T>, predicate: (value: T, index: number) => unknown) {
    let next = iterable.next();
    let idx = 0;

    while (!next.done) {
        if (predicate(next.value, idx)) {
            yield next.value;
        }

        idx++;
        next = iterable.next();
    }
}

export function findIterable<T, S extends T>(iterable: IterableIterator<T>, predicate: (value: T, index: number) => value is S): S | undefined;
export function findIterable<T>(iterable: IterableIterator<T>, predicate: (value: T, index: number) => unknown): T | undefined;
export function findIterable<T>(iterable: IterableIterator<T>, predicate: (value: T, index: number) => unknown) {
    let next = iterable.next();
    let idx = 0;

    while (!next.done) {
        if (predicate(next.value, idx)) {
            return next.value;
        }

        idx++;
        next = iterable.next();
    }

    return undefined;
}

export function* mapIterable<T, U>(iterable: IterableIterator<T>, mapper: (value: T, index: number) => U) {
    let next = iterable.next();
    let idx = 0;

    while (!next.done) {
        yield mapper(next.value, idx)
        idx++;
        next = iterable.next();
    }
}

export function reduceIterable<T, U>(
    iterable: IterableIterator<T>,
    reducer: (previous: U, current: T, index: number) => U,
    initial: U
): U {
    let next = iterable.next();
    let idx = 0;

    while (!next.done) {
        initial = reducer(initial, next.value, idx);
        idx++;
        next = iterable.next();
    }
    return initial;
}
