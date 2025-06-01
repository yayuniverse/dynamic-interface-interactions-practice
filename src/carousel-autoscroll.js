function startCarousel(scrollIntervalMs = 5000, scrollsToReset = 5) {
  const scrollFrame = document.querySelector(".scroll-frame");

  const resetIntervalMs = scrollIntervalMs * scrollsToReset;

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
