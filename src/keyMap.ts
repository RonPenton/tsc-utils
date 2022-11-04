export type KeyMapper<K extends string, O extends Record<K, any>> = (key: K) => O[K];

export function keyMap<K extends string, O extends Record<K, any>>(
    keys: readonly K[],
    mapper: KeyMapper<K, O>,
): O {
    return keys.reduce((item, key) => {
        item[key] = mapper(key);
        return item;
    }, {} as O);
}
