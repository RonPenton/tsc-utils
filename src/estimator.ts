export function createEstimator(opts: {
    totalRecords: number,
    callBackEveryXRecords: number,
    callback: (processed: number, percent: number, timeLeft: number, timeElapsed: number, recordsPerSecond: number) => void
}) {
    const {
        totalRecords,
        callBackEveryXRecords,
        callback
    } = opts;

    let start = Date.now();

    return function log(processed: number) {

        if (processed % callBackEveryXRecords !== 0) {
            return;
        }

        const now = Date.now();
        const elapsedms = now - start;
        const percent = Math.round((processed / totalRecords) * 100);
        const elapseds = Math.round(elapsedms / 1000);
        const recordsPerSecond = processed / elapseds;
        const timeLeft = Math.round((totalRecords - processed) / recordsPerSecond);
        callback(processed, percent, timeLeft, elapseds, recordsPerSecond);
    }
}