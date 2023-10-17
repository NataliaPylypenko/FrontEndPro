function removeElement(arr, element) {
    const indexOfElement = arr.indexOf(element);
    return indexOfElement !== -1 ? arr.splice(indexOfElement, 1) : arr;
}

const array = [1, 2, 3, 4, 5, 6, 7];
const itemForRemove = 5;

removeElement(array, itemForRemove);
console.log(array);
