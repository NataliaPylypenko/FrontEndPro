function removeElement(arr, element) {
    const indexOfElement = arr.indexOf(element);
    if (indexOfElement === -1) return arr;

    return arr.splice(indexOfElement, 1);
}

const array = [1, 2, 3, 4, 5, 6, 7];
const itemForRemove = 5;

removeElement(array, itemForRemove);
console.log(array);
