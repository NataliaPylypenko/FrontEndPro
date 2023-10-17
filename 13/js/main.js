function removeElement(arr, num) {
    delete arr[arr.indexOf(num)];
    return arr;
}

const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5 );
console.log(array);
