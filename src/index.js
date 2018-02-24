class Sorter {
  constructor() {
    // your implementation
    this.sorter = [];
    this.compareFunction = (a, b) => a - b;
  }

  add(element) {
    // your implementation
    this.sorter.push(element);
  }

  at(index) {
    // your implementation
    return this.sorter[index];
  }

  get length() {
    // your implementation
    return this.sorter.length;
  }

  toArray() {
    // your implementation
    return this.sorter;
  }

  sort(indices) {
    // your implementation
    indices.sort((a, b) => a - b)
    let temp = [];
    indices.forEach((e) => temp.push(this.sorter[e]));
    temp.sort(this.compareFunction);
    indices.forEach((e, i) => this.sorter[e] = temp[i]);
  }

  setComparator(compareFunction) {
    // your implementation
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;