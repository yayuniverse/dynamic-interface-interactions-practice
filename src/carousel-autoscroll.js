function startCarousel(scrollIntervalMs = 5000, scrollsBeforeReset = 5) {
  const scrollFrame = document.querySelector(".scroll-frame");

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
}

export default startCarousel;
