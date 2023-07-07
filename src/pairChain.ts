/**
 * Returns a chain of pairs from an array. 
 * @param items 
 * @returns 
 */
export function* pairChain<T>(items: T[]) {
    if(items.length < 2) 
        return;

    let last = items[0];
    for(let i = 1; i < items.length; i++) {
        yield [last, items[i]];
        last = items[i];
    }
}
