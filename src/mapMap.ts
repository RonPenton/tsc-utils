
type mapfn<T, U> = (value: T) => U;

export function mapMap<K, V, NK = K, NV = V>(map: Map<K, V>, valueMap?: mapfn<V, NV>, keyMap?: mapfn<K, NK>): Map<NK, NV> {

    const newMap = new Map<NK, NV>();
    for(const key of map.keys()) {
        const k = keyMap ? keyMap(key) : key as any;
        const value = map.get(key)!;
        const v = valueMap ? valueMap(value) : value as any;
        newMap.set(k, v);
    }

    return newMap;
}
