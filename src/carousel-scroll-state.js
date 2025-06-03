function createCounter() {
  let count = 1;
  const maxValue = 5;

  const listeners = [];

  const notifyListeners = (newCount, updateType) => {
    listeners.forEach((element) => element(newCount, updateType));
  };

  return {
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
    autoIncrease: () => {
      count += 1;
      notifyListeners(count, "auto");
    },
    increase: () => {
      count += 1;
      notifyListeners(count, "manual");
    },
    decrease: () => {
      if (count > 0) {
        count -= 1;
        notifyListeners(count, "manual");
      }
    },
    reset: () => {
      count = 1;
      notifyListeners(count, "manual");
    },
    autoReset: () => {
      count = 1;
      notifyListeners(count, "auto");
    },
    subscribe: (subscriber) => {
      listeners.push(subscriber);
    },
  };
}

const scrollCount = createCounter();
window.scrollCount = scrollCount;
export default scrollCount;
