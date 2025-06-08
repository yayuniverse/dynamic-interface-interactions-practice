class Counter {
  #count;
  #minValue;
  #maxValue;

  #listeners = [];

  #notifyListeners(newCount, oldCount, updateType) {
    this.#listeners.forEach((element) =>
      element(newCount, oldCount, updateType),
    );
  }

  constructor(startValue, minValue, maxValue) {
    this.#count = startValue;
    this.#minValue = minValue;
    this.#maxValue = maxValue;
  }

  get count() {
    return this.#count;
  }

  set setCount(value) {
    const oldCount = this.#count;
    this.#count = value;
    this.#notifyListeners(this.#count, oldCount, "manual");
  }

  get maxValue() {
    return this.#maxValue;
  }

  reset() {
    const oldCount = this.#count;
    this.#count = this.#minValue;
    this.#notifyListeners(this.#count, oldCount, "manual");
  }

  autoReset() {
    const oldCount = this.#count;
    this.#count = this.#minValue;
    this.#notifyListeners(this.#count, oldCount, "auto");
  }

  autoIncrease() {
    if (this.#count >= this.#maxValue) {
      this.autoReset();
    } else {
      const oldCount = this.#count;
      this.#count += 1;
      this.#notifyListeners(this.#count, oldCount, "auto");
    }
  }

  increase() {
    if (this.#count >= this.#maxValue) {
      this.reset();
    } else {
      const oldCount = this.#count;
      this.#count += 1;
      this.#notifyListeners(this.#count, oldCount, "manual");
    }
  }

  decrease() {
    if (this.#count <= this.#minValue) {
      const oldCount = this.#count;
      this.#count = this.#maxValue;
      this.#notifyListeners(this.#count, oldCount, "manual");
    } else {
      const oldCount = this.#count;
      this.#count -= 1;
      this.#notifyListeners(this.#count, oldCount, "manual");
    }
  }

  subscribe(subscriber) {
    this.#listeners.push(subscriber);
  }
}

const scrollCount = new Counter(1, 1, 5);
export default scrollCount;
