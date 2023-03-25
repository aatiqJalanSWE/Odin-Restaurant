import { loadInitialPage } from "./contact";
import { loadMenuPage } from "./menu";
import { loadContactPage } from "./pageLoad";

loadInitialPage();

const tabSwitchingModule = (function () {
  const homeTab = document.querySelector(".home");
  homeTab.addEventListener("click", loadInitialPage);

  const menuTab = document.querySelector(".menu");
  menuTab.addEventListener("click", loadMenuPage);

  const contactTab = document.querySelector(".contact");
  contactTab.addEventListener("click", loadContactPage);
})();
