
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
