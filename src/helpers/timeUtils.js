export function displayTime(ticksInSecs) {
    let ticks = ticksInSecs.toFixed();
    let totalHour = Math.floor(ticks / 3600);
    const dd = Math.floor(totalHour/24);
    const hh = Math.floor(totalHour % 24);
    const mm = Math.floor((ticks % 3600) / 60);
    const ss = ticks % 60;

    return `${pad(dd,2)}:${pad(hh,2)}:${pad(mm,2)}:${pad(ss,2)}`;
}

function pad(n, width) {
    var n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
}