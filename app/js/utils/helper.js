export const activate = (selector) => {
  selector.classList.add('active');
};

export const deactivate = (selector) => {
  selector.classList.remove('active');
};

export const isFiniteElement = (element) => {
  return element !== undefined && element !== null;
};
