const main = () => {
    const findMedianSortedArrays = (arr1, arr2) => {
        const arr = [...arr1, ...arr2];
        const sum = arr.reduce((prev, curr) => prev + curr);
        return sum / (arr1.length + arr2.length);
    }

    const arr1 = [1, 3];
    const arr2 = [2, 7];

    console.log(findMedianSortedArrays(arr1, arr2));
}

main();