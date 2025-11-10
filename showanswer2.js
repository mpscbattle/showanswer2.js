// --- JavaScript Section ---
function toggleAnswer(buttonElement) {
  const answerP = buttonElement.nextElementSibling;
  const isHidden = answerP.style.display === 'none' || answerP.style.display === '';

  if (isHidden) {
    answerP.style.display = 'block';
    buttonElement.textContent = 'Hide Solution';
  } else {
    answerP.style.display = 'none';
    buttonElement.textContent = 'Show Solution';
  }
}
