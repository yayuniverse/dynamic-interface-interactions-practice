import scrollCount from "./carousel-scroll-state";

function autoIncreaseCount() {
  const interval = setInterval(() => {
    scrollCount.autoIncrease();
    // console.log(scrollCount.count);
  }, 3000);

  // console.log(`IntervalID: ${interval}`);

  return interval;
}

let activeInterval = autoIncreaseCount();
let activeTimeout;

function debounceAutoIncrease(newCount, oldCount, source) {
  if (source !== "manual") {
    return;
  }

  // console.log(`Count: ${newCount}`);
  clearInterval(activeInterval);
  clearTimeout(activeTimeout);

  activeTimeout = setTimeout(() => {
    activeInterval = autoIncreaseCount();
  }, 1500);
}

scrollCount.subscribe(debounceAutoIncrease);
