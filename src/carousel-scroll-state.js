function createCounter() {
  let count = 1;
  const minValue = 1;
  const maxValue = 5;

  const listeners = [];

  const notifyListeners = (newCount, updateType) => {
    listeners.forEach((element) => element(newCount, updateType));
  };

  const counter = {
    get count() {
      return count;
    },
    set setCount(value) {
      count = value;
      notifyListeners(count, "manual");
    },
    get maxValue() {
      return maxValue;
    },
    reset: () => {
      count = 1;
      notifyListeners(count, "manual");
    },
    autoReset: () => {
      count = 1;
      notifyListeners(count, "auto");
    },
    autoIncrease: () => {
      if (count >= maxValue) {
        counter.autoReset();
      } else {
        count += 1;
        notifyListeners(count, "auto");
      }
    },
    increase: () => {
      if (count >= maxValue) {
        counter.reset();
      } else {
        count += 1;
        notifyListeners(count, "manual");
      }
    },
    decrease: () => {
      if (count <= minValue) {
        counter.reset();
        notifyListeners(count, "manual");
      } else {
        count -= 1;
        notifyListeners(count, "manual");
      }
    },
    subscribe: (subscriber) => {
      listeners.push(subscriber);
    },
  };

  return counter;
}

const scrollCount = createCounter();
window.scrollCount = scrollCount;
export default scrollCount;
