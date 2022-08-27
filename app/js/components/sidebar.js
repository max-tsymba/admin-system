import { activate, deactivate, isFiniteElement } from '../utils/helper';

const handleSidebarOpen = (sidebarSelector, buttonSelector, ...selectors) => {
  const sidebar = document.querySelector(sidebarSelector),
    button = document.querySelector(buttonSelector),
    querySelectors = document.querySelectorAll(selectors),
    isSidebarFinite = isFiniteElement(sidebar),
    isButtonFinite = isFiniteElement(button);

  let isOpen = true;

  if (isSidebarFinite && isButtonFinite) {
    button.addEventListener('click', open(isOpen, sidebar, querySelectors));
  }
};

function open(state, sidebar, selectors) {
  return function () {
    if (state) {
      activate(sidebar);
      selectors.forEach((item) => activate(item));
      state = false;
    } else {
      deactivate(sidebar);
      selectors.forEach((item) => deactivate(item));
      state = true;
    }
  };
}

export default handleSidebarOpen;
