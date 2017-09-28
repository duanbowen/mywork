/**
 * 排序算法
 * 
 */

let myArr = [1, 2, 5, 7, 2, 9, 10, 50, 84, 20, 123, 20, 36, 10, 8, 45, 124, 78, 94, 65, 248, 15, 20];
let sortA = [];
for (var i = 0; i < 20; i++) {
    sortA[i] = Math.floor(Math.random() * 100 + 1);
}


/**
 * 冒泡排序  选最大的数
 */

function bubble(arr) {
    console.log(arr);

    let element = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                element = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = element;
            }
        }
    }
    console.log(arr);
}
//bubble(sortA)

/**
 * 选择排序  O(n^2) 数据规模越小越好 稳定
 * 
 * 选最小的数
 */

function selectionSort(array) {
    let minIndex, temp;
    let length = array.length;
    console.log(array);
    for (var i = 0; i < length; i++) {
        minIndex = i;
        for (var j = i + 1; j < length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;

    }

    console.log(array);
}

//selectionSort(sortA);

/**
 * 插入排序 
 * 每次去比较当前数据在列表中的前面部分 
 */

function insertSort(array) {
    let preIndex, current;
    for (let i = 1; i < array.length; i++) {
        preIndex = i - 1;
        current = array[i];

        //如果排序有问题 需要变更排序位置
        while (array[preIndex] > current && preIndex >= 0) {
            array[preIndex + 1] = array[preIndex];
            --preIndex;
        }
        array[preIndex + 1] = current;

    }

    console.log(array);
}

//insertSort(sortA)

/**
 * 
 * 快速排序  将数组以一个基准值分为两个数组 left(min) right(max)
 * @param {any} arr 
 * @returns 
 */
function quickSort(arr) {
    if (!arr.length) {
        return [];
    }
    let left = [],
        right = [],
        pivot = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return quickSort(left).concat(pivot, quickSort(right))
}

console.log(quickSort(sortA));

/**
 * 堆排序 
 */