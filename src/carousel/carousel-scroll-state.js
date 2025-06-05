function createCounter() {
  let count = 1;
  const minValue = 1;
  const maxValue = 5;

  const listeners = [];

  const notifyListeners = (newCount, oldCount, updateType) => {
    listeners.forEach((element) => element(newCount, oldCount, updateType));
  };

  const counter = {
    get count() {
      return count;
    },
    set setCount(value) {
      const oldCount = count;
      count = value;
      notifyListeners(count, oldCount, "manual");
    },
    get maxValue() {
      return maxValue;
    },
    reset: () => {
      const oldCount = count;
      count = 1;
      notifyListeners(count, oldCount, "manual");
    },
    autoReset: () => {
      const oldCount = count;
      count = 1;
      notifyListeners(count, oldCount, "auto");
    },
    autoIncrease: () => {
      if (count >= maxValue) {
        counter.autoReset();
      } else {
        const oldCount = count;
        count += 1;
        notifyListeners(count, oldCount, "auto");
      }
    },
    increase: () => {
      if (count >= maxValue) {
        counter.reset();
      } else {
        const oldCount = count;
        count += 1;
        notifyListeners(count, oldCount, "manual");
      }
    },
    decrease: () => {
      if (count <= minValue) {
        const oldCount = count;
        count = maxValue;
        notifyListeners(count, oldCount, "manual");
      } else {
        const oldCount = count;
        count -= 1;
        notifyListeners(count, oldCount, "manual");
      }
    },
    subscribe: (subscriber) => {
      listeners.push(subscriber);
    },
  };

  return counter;
}

const scrollCount = createCounter();
export default scrollCount;
