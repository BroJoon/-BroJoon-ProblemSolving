function solution(food) {
    let answer = '';
    for (let i = 1; i < food.length; i++) {
        for (let j = 0; j < Math.floor(food[i] / 2); j++) {
            answer += i;
        }
    }
    answer += '0' + [...answer].reverse().join("");
    return answer;
}