function createCounter() {
  let count = 1;
  const maxValue = 5;

  return {
    get count() {
      return count;
    },
    set setCount(value) {
      count = value;
    },
    get maxValue() {
      return maxValue;
    },
    increase: () => {
      count += 1;
    },
    decrease: () => {
      if (count > 0) {
        count -= 1;
      }
    },
    reset: () => {
      count = 1;
    },
  };
}

const scrollCount = createCounter();
export default scrollCount;

// put actions on state-level within state update definition
// put actions where the state updates are made (state methods are called)
// put actions in a perpetually running setInterval block that constantly checks for changes
