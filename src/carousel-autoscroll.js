import scrollCount from "./carousel-scroll-state";

function autoIncreaseCount() {
  const interval = setInterval(() => {
    if (scrollCount.count === scrollCount.maxValue) {
      scrollCount.reset();
      console.log(scrollCount.count);
    } else {
      scrollCount.increase();
      console.log(scrollCount.count);
    }
  }, 1000);
  console.log(`IntervalID: ${interval}`);

  return interval;
}

let activeInterval = autoIncreaseCount();

function debounceAutoIncrease() {
  clearInterval(activeInterval);

  setTimeout(() => {
    activeInterval = autoIncreaseCount();
  }, 5000);
}

export default debounceAutoIncrease;

window.debounceAutoIncrease = debounceAutoIncrease;
