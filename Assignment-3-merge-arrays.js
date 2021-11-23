var array1 = [1, 2, 3];
var array2 = [2, 30, 1];

function mergeArray(arr1, arr2) {
    let arr3 = arr1.concat(arr2);
    arr3 = arr3.filter((item, index) => {
        return arr3.indexOf(item) == index;
    });
    return arr3;
}

console.log(mergeArray(array1, array2));
