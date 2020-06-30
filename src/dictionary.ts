export interface Dictionary<T> {
    [key: string]: T;
}

export type DictionaryIterator<V> = (key: string, value: V) => void;

function iterateDictionary<V>(dictionary: Dictionary<V>, iterator: DictionaryIterator<V>) {
    const keys = Object.keys(dictionary);
    keys.forEach(k => iterator(k, dictionary[k]));
}

function toMap<V>(dictionary: Dictionary<V>) {
    const map = new Map<string, V>();
    iterateDictionary(dictionary, (k, v) => {
        map.set(k, v);
    });
    return map;
}

function toDictionary<V>(map: Map<string, V>) {
    const dictionary: Dictionary<V> = {};
    for (const key of map.keys()) {
        dictionary[key] = map.get(key)!;
    }
    return dictionary;
}

export { iterateDictionary, toMap, toDictionary };
