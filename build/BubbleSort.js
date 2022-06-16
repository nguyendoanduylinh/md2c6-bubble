"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BubbleSort = void 0;
class BubbleSort {
    static bubbleSort(list) {
        for (let k = 1; k < list.length; k++) {
            for (let i = 0; i < list.length - k; i++) {
                if (list[i] > list[i + 1]) {
                    let temp = list[i];
                    list[i] = list[i + 1];
                    list[i + 1] = temp;
                }
            }
        }
    }
}
exports.BubbleSort = BubbleSort;
BubbleSort.list = [2, 3, 2, 5, 6, 1, -2, 3, 14, 12];
