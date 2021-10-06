export type RecordMapper<K, V> = (value: K) => V;

export function recordMap<K extends string | number | symbol, V>(
    keys: readonly K[],
    mapper: RecordMapper<K, V>,
): Record<K, V> {

    return keys.reduce((item, key) => {
        item[key] = mapper(key);
        return item;
    }, {} as Record<K, V>);
}
