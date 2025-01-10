
type KeySelector<T, K> = (obj: T) => K;

/**
 * Groups an iterable by a key. 
 * @param iterable 
 * @param selector 
 * @returns 
 */
export function groupBy<T, K>(iterable: Iterable<T>, selector: KeySelector<T, K>): Map<K, T[]> {
    const map = new Map<K, T[]>();
    for (const obj of iterable) {
        const key = selector(obj);
        const group = map.get(key) ?? [];
        group.push(obj);
        map.set(selector(obj), group);
    }
    return map;
}
