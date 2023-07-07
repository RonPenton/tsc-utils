/**
 * Splits an array in two based on a predicate function.
 * @param arr 
 * @param predicate 
 * @returns 
 */
export function bifurcate<T, S extends T>(arr: T[], predicate: (value: T, index: number) => value is S): [S[], Exclude<T, S>[]];
export function bifurcate<T>(arr: T[], predicate: (value: T, index: number) => unknown): [T[], T[]];
export function bifurcate<T>(arr: T[], predicate: (arg: T, index: number) => unknown) {
    arr.filter
    return arr.reduce((acc, cur, i) => {
        acc[predicate(cur, i) ? 0 : 1].push(cur);
        return acc;
    }, [[], []] as [T[], T[]]);
}
