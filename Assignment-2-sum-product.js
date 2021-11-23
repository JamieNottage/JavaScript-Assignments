let numArray = [2, 3, 4, 5, 6];
let sum = 0;
let product = 1;
let num;

for (num of numArray) {
    sum += num;
    product *= num;
}
console.log(sum);
console.log(product);
