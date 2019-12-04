export function say(str) {
    return str + say(str);
}

export function sayIterative(str, n) {
    const val = [];
    for(let i = 0; val.length < n; i++){
        val.push(str);
    }
    return val.join(' ');
}

export function sayRecursive(str, n) {
    if(n === 1) return str;
    return `${str} ${sayRecursive(str, n-1)}`;
}