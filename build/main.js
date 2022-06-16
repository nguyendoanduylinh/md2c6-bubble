"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BubbleSort_1 = require("./BubbleSort");
BubbleSort_1.BubbleSort.bubbleSort(BubbleSort_1.BubbleSort.list);
for (let i = 0; i < BubbleSort_1.BubbleSort.list.length; i++)
    console.log(BubbleSort_1.BubbleSort.list[i] + " ");
