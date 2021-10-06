export type RecordMapper<K, V> = (value: K) => V;
export type RecordMapperAsync<K, V> = (value: K) => Promise<V>;

export function recordMap<K extends string | number | symbol, V>(
    keys: readonly K[],
    mapper: RecordMapper<K, V>,
): Record<K, V> {

    return keys.reduce((item, key) => {
        item[key] = mapper(key);
        return item;
    }, {} as Record<K, V>);
}

export async function recordMapAsync<K extends string | number | symbol, V>(
    keys: readonly K[],
    mapper: RecordMapperAsync<K, V>,
): Promise<Record<K, V>> {

    let item = {} as Record<K, V>;
    for (const key of keys) {
        item[key] = await mapper(key);
    }
    return item;
}
