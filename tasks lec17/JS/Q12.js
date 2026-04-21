function finalGrand(exam_grad, numOfProjects) {
    if (exam_grad > 90 || numOfProjects > 10) {
        return 100;
    }
    else if (exam_grad > 75 && numOfProjects >= 5) {
        return 90;
    }
    else if (exam_grad > 50 && numOfProjects >= 2) {
        return 75;
    }
    else {
        return 0;
    }
}

var exam_grad = Number(prompt("Enter your exam score: "));
var numOfProjects = Number(prompt("Enter the number of projects you had compelete: "));

console.log(finalGrand(exam_grad, numOfProjects));