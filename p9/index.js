function coadingScoreCheck(arr, cutOffScore) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let sum = arr.reduce((acc, el) => acc + el, 0);
            let average = sum / arr.length;
            
            if (cutOffScore >= average) {
                resolve(average);
            } else {
                reject("Sorry you haven't cleared the coding round");
            }
        }, 2000);
    });
}

let arr = [1, 2, 3, 4, 5];
let c = 3;
coadingScoreCheck(arr, c).then((res) => console.log(res)).catch((err) => console.log(err));
