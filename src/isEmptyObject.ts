export function isEmptyObject(obj: any): obj is Record<string, never> {
    return !!obj
        && Object.keys(obj).length === 0
        && obj.constructor === Object
        && Object.getOwnPropertySymbols(obj).length == 0;
}
