const scrollFrame = document.querySelector(".scroll-frame");

const scrollIntervalMs = 5000;
const scrollsBeforeReset = 5;
const resetIntervalMs = scrollIntervalMs * scrollsBeforeReset;

setInterval(() => {
  scrollFrame.scrollBy({
    top: 0,
    left: 500,
    behavior: "smooth",
  });
}, scrollIntervalMs);

setInterval(() => {
  scrollFrame.scrollLeft = 0;
}, resetIntervalMs);
