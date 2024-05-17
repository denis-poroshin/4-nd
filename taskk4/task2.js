// Задание 1
let arr = [1, 5, 4, 10, 0, 3];
for (const iterator of arr) {
    if (iterator === 10) {
        break;
    }
    console.log(iterator);
}
// Задание 2
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 4) {
        console.log(i);
    }
}
// Задание 3
arr = [1, 3, 5, 10, 20];
console.log(arr.join(" "));
// Задание 4
arr = [];
let newArr = [];
for (let i = 0; i < 10; i++) {
    arr[i] = Math.round(Math.random(0, 10) * 10);
    if (arr[i] % 2 === 0) {
        newArr.push(arr[i]);
    }

}
console.log(arr);
console.log(newArr);
// Задание 5
arr = [];
for (let i = 0; i < 3; i++) {
    arrIn = [];
    for (let j = 0; j < 3; j++) {
        arrIn.push(1);

    }
    arr.push(arrIn);
}
console.log(arr);

// Задание 6
arr = [1, 1, 1];
for (let i = 0; i < 3; i++) {
    arr.push(2);

}
console.log(arr);
// Задание 7
arr = [9, 8, 7, 'a', 6, 5];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'a') {
        delete arr[i];
    }

}
console.log(arr.sort());
// Задание 8
let flag = false;
arr = [9, 8, 7, 6, 5];
let num = Number(prompt());
for (const iterator of arr) {
    if (iterator === num) {
        flag = true;
    }
}
if (flag) {
    console.log("Число в массиве есть");
} else {
    console.log("Числа в массиве нет");
}
// Задание 9
let string = 'abcdef'.split("");
let reverseString = string.reverse();
console.log(reverseString.join(""));
// Задание 10
arr = [];
let total = 0;
for (let i = 0; i < 6; i++) {
    arr[i] = Math.round(Math.random(1, 10) * 10);
    total += arr[i];
}
console.log(arr);
console.log(total / arr.length);
// Задание 11
let mass = [[1, 2, 3,], [4, 5, 6]];
let newMass = [];
for (let i = 0; i < mass.length; i++) {
    for (let j = 0; j <= mass.length; j++) {
        newMass.push(mass[i][j]);
    }
}
console.log(newMass);
// Задание 12
arr = [];
for (let i = 0; i < 6; i++) {
    arr[i] = Math.round(Math.random(1, 10) * 10);
}
console.log(arr);
for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
        break;
    }
    console.log(arr[i] + arr[i + 1]);

}






















