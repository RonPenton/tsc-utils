export async function timeFunction<T>(promise: Promise<T>) {
    const start = new Date().valueOf();
    const result = await promise;
    const time = new Date().valueOf() - start;
    return { result, time }
}