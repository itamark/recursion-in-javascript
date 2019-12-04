export function factorialIterative(num) {
    let answer = 1;
    for(var i = 2; i <= num; i++){
        answer *= i;
    }
    return answer;
}

export function factorialRecursive(num) {
    if(num < 2) return num;
    return num *= factorialRecursive(num-1);
}