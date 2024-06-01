function changeBackgroundColor(event) {
  const buttons = document.querySelectorAll('.c-f button');
  const element = event.target;
  buttons.forEach((button) => {
    if (button.classList.contains('selected')) {
      button.classList.remove('selected');
    }
  });
  element.classList.add('selected')
}

export default changeBackgroundColor;
