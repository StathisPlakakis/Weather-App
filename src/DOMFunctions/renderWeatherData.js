function renderAllData(result) {
  const condition = document.querySelector('.condition');
  condition.textContent = result.condition;
  condition.classList.add('visible');
}

export default renderAllData;
