const toggleText = (elementSelector, initialText, desiredText) => {
  element = document.querySelector(elementSelector);
  
  if (element.innerHTML === initialText) {
    element.innerHTML = desiredText;
  } else {
    element.innerHTML = initialText;
  }
};

const toggleClass = (elementSelector, stateSelector) => {
  element = document.querySelector(elementSelector);

  if (element.classList.contains(stateSelector)) {
    element.classList.remove(stateSelector);
  } else {
    element.classList.add(stateSelector);
  }
};

document.querySelector('.js-nav-toggle').addEventListener('click', () => {
  toggleClass('.js-nav-toggle', 'header-nav__toggle--close');
  toggleText('.js-nav-toggle', 'Open navigation', 'Close navigation');
  toggleClass('.js-nav-content', 'header-nav__items-container--is-active');
  toggleClass('.js-nav-mask', 'header-nav-mask--is-active');
});
