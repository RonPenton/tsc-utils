
type mapfn<T, U> = (value: T) => U;

export function objectMap<V, NV = V>(
    obj: Record<string, V>, valueMap?: mapfn<V, NV>, keyMap?: mapfn<string, string>
): Record<string, NV> {

    const newObject: any = {};

    for (const key of Object.keys(obj)) {
        const k = keyMap ? keyMap(key) : key;
        const value = obj[key];
        const v = valueMap ? valueMap(value) : value;
        newObject[k] = v;
    }

    return newObject;
}

export type KeyedMapFn<K, V, NV = V> = (value: V, key: K) => NV;

export function typedObjectMap<K extends string, V, NV = V>(
    obj: Record<K, V>, map: KeyedMapFn<K, V, NV>
): Record<K, NV> {
    const newObject: Record<K, NV> = {} as any;
    for (const key in obj) {
        newObject[key] = map(obj[key], key);
    }
    return newObject;
}
