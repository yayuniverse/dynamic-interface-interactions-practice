import scrollCount from "./carousel-scroll-state";

function autoIncreaseCount() {
  const interval = setInterval(() => {
    if (scrollCount.count === scrollCount.maxValue) {
      scrollCount.autoReset();
      console.log(scrollCount.count);
    } else {
      scrollCount.autoIncrease();
      console.log(scrollCount.count);
    }
  }, 1000);
  console.log(`IntervalID: ${interval}`);

  return interval;
}

let activeInterval = autoIncreaseCount();

function debounceAutoIncrease(newCount, source) {
  if (source !== "manual") {
    return;
  }

  clearInterval(activeInterval);

  setTimeout(() => {
    activeInterval = autoIncreaseCount();
  }, 5000);
}
// to fix: multiple intervals are created on triggering the timeout function multiple
// times before the first one runs the code it contains so the latest timeout is the only one bound to activeInterval
// while the others are not bound to anything but still running

scrollCount.subscribe(debounceAutoIncrease);

export default debounceAutoIncrease;
