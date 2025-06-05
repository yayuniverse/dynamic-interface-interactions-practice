import scrollCount from "./carousel-scroll-state";

function autoIncreaseCount() {
  const interval = setInterval(() => {
    scrollCount.autoIncrease();
  }, 3000);

  return interval;
}

let activeInterval = autoIncreaseCount();
let activeTimeout;

function debounceAutoIncrease(newCount, oldCount, source) {
  if (source !== "manual") {
    return;
  }

  clearInterval(activeInterval);
  clearTimeout(activeTimeout);

  activeTimeout = setTimeout(() => {
    activeInterval = autoIncreaseCount();
  }, 1500);
}

scrollCount.subscribe(debounceAutoIncrease);
