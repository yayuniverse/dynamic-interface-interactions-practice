import scrollCount from "./carousel-scroll-state";

const scrollFrame = document.querySelector(".scroll-frame");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

const dotOne = document.querySelector(".dot1");
const dotTwo = document.querySelector(".dot2");
const dotThree = document.querySelector(".dot3");
const dotFour = document.querySelector(".dot4");
const dotFive = document.querySelector(".dot5");

function scrollFrameBy(scrollValue) {
  scrollFrame.scrollBy({
    top: 0,
    left: scrollValue,
    behavior: "instant",
  });
}

function setActiveDot(count) {
  const allDots = [dotOne, dotTwo, dotThree, dotFour, dotFive];
  allDots.forEach((dot) => dot.classList.remove("active-dot"));

  switch (count) {
    case 1:
      dotOne.classList.add("active-dot");
      break;
    case 2:
      dotTwo.classList.add("active-dot");
      break;
    case 3:
      dotThree.classList.add("active-dot");
      break;
    case 4:
      dotFour.classList.add("active-dot");
      break;
    case 5:
      dotFive.classList.add("active-dot");
      break;
    default:
      break;
  }
}

prevButton.addEventListener("click", () => {
  scrollCount.decrease();
});
nextButton.addEventListener("click", () => {
  scrollCount.increase();
});

scrollCount.subscribe((newCount, oldCount) => {
  scrollFrameBy((newCount - oldCount) * 500);
  setActiveDot(newCount);
});

export { scrollFrameBy, setActiveDot };
