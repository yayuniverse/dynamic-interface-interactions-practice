import "./reset.css";
import "./global.css";
import "./dropdown.css";
import makeDropdown from "./dropdown";
import "./carousel.css";
import startCarousel from "./carousel-autoscroll";

makeDropdown(document.querySelector(".dropdown-wrapper"));

startCarousel();
