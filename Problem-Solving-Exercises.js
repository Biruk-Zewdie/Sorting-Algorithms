
/*============================================ Bubble-sort ================================================*/

const bubbleSort = (array) => {
    for (let i=0; i<array.length; i++){
        for (let j=0; j<array.length-1-i; j++){
            if (array[j] > array[j+1]){
                let temp =  array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array 
}
console.log(bubbleSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
console.log(bubbleSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
console.log(bubbleSort([1, 2, 3])); // [1, 2, 3]
console.log(bubbleSort([]));
console.log(bubbleSort([4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34,23, 2, 453, 546, 75, 67, 4342, 32]));

/*============================================ Merge ================================================*/

const merge = (array1, array2) => {
    const result = []
    // compare the first element of the first array with the first element of the second array
    // if the first element of the first array is less than the second element push it to results array
    // if not 
    let i=0;
    let j=0;
    while (i < array1.length && j < array2.length ){
        if (array1[i] < array2[j]){
            result.push (array1[i])
            i++
        }else {
            result.push (array2[j])
            j++
        }
    }
    while (i < array1.length){
         result.push(array1[i])
            i++
    }
    while (j < array2.length){
         result.push(array2[j])
            j++
        
    }
    return result;
}

console.log (merge ([1,3,4,5], [2,4,6,8]))
console.log (merge ([-2,-1,0,4,5,6], [-3,-2,-1,2,3,5,7,8]))
console.log (merge ([1,3,4,5], [2,4,6,8]))
console.log (merge ([3,4,5], [1,2]))


/*============================================ Merge-Sort ================================================*/

const merge1 = (array1, array2) => {
    let i=0;
    let j=0;
    const result = []
    while (i < array1.length && j < array2.length){
        if (array1[i] < array2[j]){
            result.push(array1[i])
            i++
        }else {
            result.push(array2[j])
            j++
        }
    }
    while (i < array1.length){
        result.push(array1[i])
        i++
    }
    while (j < array2.length){
        result.push (array2[j])
        j++
    }
    return result; 
}

const mergeSort = (array) => {
    if(array.length <= 1) return array ; //base case
    let midIdx = Math.floor(array.length/2)
    let leftArray = mergeSort (array.slice(0,midIdx))
    let rightArray = mergeSort (array.slice(midIdx))
    return merge1(leftArray, rightArray)
   
}

console.log(mergeSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
console.log(mergeSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
console.log(mergeSort([1, 2, 3])); // [1, 2, 3]
console.log(mergeSort([]));
console.log(mergeSort([4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32]));

/*============================================ Insertion-Sort ================================================*/

const insertionSort = (array) => {
    for (let i=1; i < array.length; i++){
        for (let j=i; j>0; j--){
            if (array[j] < array[j-1]){
                let temp = array[j]
                array[j] = array[j-1]
                array[j-1] = temp;
            }
        }
    }
    return array
}
console.log(insertionSort([5,8,2,4,1,7]))
console.log(insertionSort([0, -10, 7, 4]))
console.log(insertionSort([1, 2, 3]))
console.log(insertionSort([]))

/*============================================ Selection-Sort ================================================*/

const selectionSort = (array) => {
    for (let i=0; i<array.length; i++){
        for (let j=i+1; j<array.length; j++){
            if (array[i] > array[j]){
                let temp = array[i]
                array[i] = array [j];
                array[j] = temp;
            }
        }
    }
    return array;
}
console.log(selectionSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
console.log(selectionSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
console.log(selectionSort([1, 2, 3])); // [1, 2, 3]
console.log(selectionSort([]));
console.log(selectionSort([4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34,23, 2, 453, 546, 75, 67, 4342, 32]))

/*================================================== pivot ===================================================*/

const pivot = (array) =>{
    // define the pivotvalue and pivotIdx 
    let pivotIdx = 0;
    let pivotValue = array[pivotIdx]

    //compare the pivotvalue with every element in the array;
    //if the current element is lower that the pivot element swap it to the left of the pivot element
    //else it will stay to the right of the pivotvalue 
    for (let i=1; i< array.length; i++){
        // console.log (pivotIdx)
        // console.log (array)
        if (array[i] < pivotValue){
            pivotIdx++  // to track the next position (track the pivot index) where the smaller element should be placed. this don't move the pivot value nowhere.
            let temp = array[i];
            array[i] = array[pivotIdx]
            array[pivotIdx] = temp;
            
        }
    }
    // console.log (pivotIdx)
    let temp = array[pivotIdx]
    array[pivotIdx] = array[0]
    array[0] = temp;
    
    return pivotIdx;
    
}
console.log(pivot([4, 2, 5, 3, 6]))
console.log(pivot([5, 4, 9, 10, 2, 20, 8, 7, 3]))
console.log(pivot([8, 4, 2, 5, 0, 10, 11, 12, 13, 16]));

/*================================================== Quick-sort ===================================================*/

const pivot1 = (array, start=0, end = array.length-1) => {
    let swapIdx = start;
    let pivotIdx = start;
    let pivotValue = array[start];

    for (let i= start + 1; i<=end; i++){
        // console.log (array);
        if (array[i] < pivotValue){       //array[i] = current value
            swapIdx++
            let temp = array[i];
            array[i] = array[swapIdx];
            array[swapIdx] = temp;
        }
    }
    let temp = array[start];
    array[start] = array[swapIdx];
    array[swapIdx] = temp;
    return swapIdx;
}
// console.log (pivot([5, 4, 9, 10, 2, 20, 8, 7, 3]));

const quickSort = (array, start = 0, end = array.length-1) => {
    if (start < end){
        let pivotIdx = pivot1(array,start,end)
        
        quickSort(array, start, pivotIdx-1)
        quickSort(array, pivotIdx+1, end)
    }
    return array 
}

// console.log (quickSort([5, 4, 9, 10, 2, 20, 8, 7, 3]));
console.log (quickSort([4, 20, 12, 10, 7, 9]));
console.log (quickSort([0, -10, 7, 4]));
console.log (quickSort([1, 2, 3]));
console.log (quickSort([]));
console.log (quickSort([4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23,2, 453, 546, 75, 67, 4342, 32]));

/*================================================== Radix-sort ===================================================*/

//steps
    //1. find the maximum element within an array;
    //2. create an array for for the ordered array with a size equivalent to the orignal array.
    //3. create an array for the count of the digits 
    //4. iterate over the elements of an array to get 1's digit and put them inside the count array
        // here the index of count array is equivalent to the 1's digit of elements of the original array.
        // the value of count array is equivalent to the frequency of the digit occur in each element.
    //5.prefix array sum. Iterate over the count array to sum the prefix of the current element.
    //6.place elements in output array.
    const maxElement = (array) => {
        let max = array[0];
        
        for (let i=0; i< array.length; i++){
            if (max < array[i]){
                max = array[i];
            }
        }
        return max
    }
    const countSort = (array, exp) => {
        // const length = array.length
        let output = new Array(array.length)
        let count = new Array(10).fill(0)
    
        for (let i=0; i < array.length; i++){
            const digit = Math.floor(array[i]/ exp) % 10;
            count[digit]++    
            // console.log (count)
        }
    
        for (let i=1; i < 10; i++){
            count[i] += count[i-1];
            // console.log (count)
        }
    
        for (let i=array.length-1; i>=0; i--){
            let digit = Math.floor(array[i]/exp) % 10;
            output[count[digit] - 1] = array[i];
            count[digit]--;
            // console.log(output)
        }
        return output;
    }
    const radixSort = (array) => {
        const maximumElement = maxElement(array)
        let sortedArr = [...array]
    
        for (let exp = 1; Math.floor(maximumElement/exp) > 0; exp *= 10){
            const sortedIteration = countSort(sortedArr, exp)
            sortedArr = sortedIteration;
        }
        return sortedArr;
        
    }
    
    console.log (radixSort([8, 6, 1, 12]))
    console.log (radixSort([10, 100, 1, 1000, 10000000]))
    console.log (radixSort([902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593]))