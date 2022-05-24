export function padEnd(str: string, maxLength: number, fillString: string) {
    return str.padEnd(maxLength, fillString);
}

declare global {
    interface String {
        padZero(length: number): string;
        padEnd(maxLength: number, fillString: string): string;
    }
}

String.prototype.padEnd = function (maxLength: number, fillString: string) {

    let result = String(this);

    if (!fillString || !maxLength) {
        return result;
    }

    let targetLen = typeof maxLength === 'number'
        ? maxLength
        : parseInt(maxLength, 10);

    if (isNaN(targetLen) || !isFinite(targetLen)) {
        return result;
    }

    let length = result.length;
    if (length >= targetLen) {
        return result;
    }


    let filled = fillString == null ? '' : String(fillString);
    if (filled === '') {
        filled = ' ';
    }

    let fillLen = targetLen - length;

    while (filled.length < fillLen) {
        filled += filled;
    }

    let truncated = filled.length > fillLen ? filled.substr(0, fillLen) : filled;

    return result + truncated;
};

String.prototype.padZero = function (length: number) {
    let d = String(this)
    while (d.length < length) {
        d = '0' + d;
    }
    return d;
};