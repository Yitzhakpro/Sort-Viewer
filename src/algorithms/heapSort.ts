import type { IdentifiedNumberList } from "../types";

class MaxHeap {
  heap: any[];

  constructor() {
    this.heap = [];
  }

  private parentIndex(index: number) {
    return Math.floor((index - 1) / 2);
  }

  private leftChildIndex(index: number) {
    return 2 * index + 1;
  }

  private rightChildIndex(index: number) {
    return 2 * index + 2;
  }

  private swap(a: any, b: any) {
    const temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  }

  public insert(item: any) {
    this.heap.push(item);
    let index = this.heap.length - 1;
    let parentIndex = this.parentIndex(index);

    while (
      this.heap[parentIndex] &&
      this.heap[parentIndex] < this.heap[index]
    ) {
      this.swap(parentIndex, index);
      index = this.parentIndex(index);
      parentIndex = this.parentIndex(index);
    }
  }

  public delete() {
    const item = this.heap.shift();
    this.heap.unshift(this.heap.pop());

    let index = 0;
    let leftChild = this.leftChildIndex(index);
    let rightChild = this.rightChildIndex(index);
    while (
      (this.heap[leftChild] && this.heap[leftChild] > this.heap[index]) ||
      this.heap[rightChild] > this.heap[index]
    ) {
      let max = leftChild;
      if (this.heap[rightChild] && this.heap[rightChild] > this.heap[max]) {
        max = rightChild;
      }

      this.swap(max, index);

      index = max;
      leftChild = this.leftChildIndex(max);
      rightChild = this.rightChildIndex(max);
    }

    return item;
  }
}

export function heapSort(arr: IdentifiedNumberList) {
  var sorted = [];
  var heap1 = new MaxHeap();

  for (let i = 0; i < arr.length; i++) {
    heap1.insert(arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    sorted.push(heap1.delete());
  }
  return sorted;
}
