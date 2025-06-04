import "./reset.css";
import "./global.css";
import "./dropdown/dropdown.css";
import makeDropdown from "./dropdown/dropdown";
import "./carousel/carousel.css";
import "./carousel/carousel-navigation";
import "./carousel/carousel-autoscroll";

makeDropdown(document.querySelector(".dropdown-wrapper"));
