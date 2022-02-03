const main = () => {
    const findAverageSortedArrays = (arr1, arr2) => {
        const arr = [...arr1, ...arr2];
        const sum = arr.reduce((prev, curr) => prev + curr);
        return sum / (arr1.length + arr2.length);
    }

    const findMedianSortedArrays = (arr1, arr2) => {
        const arr = [...arr1, ...arr2].sort();
        console.log(arr);
        const median = arr.length%2 == 1 ? arr[(arr.length - 1)/2] : (arr[arr.length/2 - 1] + arr[arr.length/2])/2;
        console.log( arr[(arr.length - 1)/2 ]);
        
        return median;
    }

    const arr1 = [1, 3];
    const arr2 = [2, 7];

    console.log(findAverageSortedArrays(arr1, arr2));
    console.log(findMedianSortedArrays([1, 3], [2]));
}

main();